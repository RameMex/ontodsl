# Onto DSL — Phase 15.8

Async event wrappers. Each event with `--rust-async` gains an `<event>_wrapped_async` variant that awaits the user's impl closure. Runtime-agnostic: works with embassy (embedded), tokio (hosted), smol, any executor.

## Setup

```bash
npm install
npx vitest run    # 539 tests across 35 test files
```

## What ships

- `eventWrappers.ts` extended: per-event, emits sync `_wrapped` and (when `emitAsync`) async `_wrapped_async` variants.
- `RenderRustOptions.emitAsync` (default false).
- CLI `--rust-async`.
- 14 tests (`test/phase15_8.test.ts`).

## Generated shape

```rust
impl Drone {
    pub fn swap_battery_wrapped<F>(...) -> Result<(), &'static str>
    where F: FnOnce(&mut Self, BatteryPack)
    { ... }

    pub async fn swap_battery_wrapped_async<F, Fut>(
        &mut self,
        b: BatteryPack,
        impl_fn: F,
    ) -> Result<(), &'static str>
    where
        F: FnOnce(&mut Self, BatteryPack) -> Fut,
        Fut: core::future::Future<Output = ()>,
    {
        if !((b.charge_level > 0.5)) { return Err(...); }
        let __pre_battery = self.battery.clone();
        impl_fn(self, b).await;
        if !((self.battery != __pre_battery)) { return Err(...); }
        Ok(())
    }
}
```

## Usage in firmware

embassy:
```rust
drone.swap_battery_wrapped_async(new_battery, |self_, b| async move {
    embassy_time::Timer::after_millis(100).await;
    self_.battery = b;
}).await?;
```

tokio:
```rust
drone.swap_battery_wrapped_async(new_battery, |self_, b| async move {
    tokio::time::sleep(Duration::from_millis(100)).await;
    self_.battery = b;
}).await?;
```

## Design decisions

1. **Both variants emitted, opt-in via `--rust-async`.** Sync stays default — most uses don't need async overhead. Async adds ~30 LOC per event; opt-in keeps lean code lean.
2. **`core::future::Future`, not `embassy_*` or `tokio::*`.** `core` is in every Rust target; the future trait bound works against any executor. No runtime dep added to Cargo.toml.
3. **Generic `Fut: Future<Output = ()>`, not `Pin<Box<dyn Future>>`.** Box requires alloc; static dispatch via generic compiles for any concrete future without indirection. Works in no-alloc.
4. **`FnOnce(&mut Self, ...) -> Fut`.** User's closure builds a future capturing `self` reborrow. Pattern: `|self_, b| async move { ... }`. Compiler infers Fut.
5. **Same translator, sync and async share pre/post code.** Only difference: `impl_fn(self, ...)` vs `impl_fn(self, ...).await`. No duplication of OCL → Rust logic.
6. **Identical error messages.** Sync and async wrappers emit the same `[X::ev] precondition violated: ...` strings — debugging the same way.

## Tests (14 new)

**Default off (2):** no async wrapper without flag, sync still emitted.

**Signature (5):** async fn name, generic Fut bound, closure shape, zero-param shape, Result return.

**Body (4):** awaits impl_fn, pre runs before await, snapshot before await, post runs after await.

**Coexistence (2):** both wrappers when emitAsync=true, identical pre/post messages.

**no-alloc compatibility (1):** async works alongside heapless types.

## Drone smoke

```bash
ontodsl examples/drone.onto --out ./drone --target rust --rust-no-alloc --rust-async --rust-capacity 16
```

1037 LOC: 5 sync wrappers + 5 async wrappers. embassy-ready, no allocator needed.

## Phase 15 retrospective — Rust track complete

| Phase | What |
|---|---|
| 15 | Structs, branded IDs, factories, validators, no_std + alloc |
| 15.5 | Sync event wrappers |
| 15.6 | Commitment registries |
| 15.7 | `--rust-no-alloc` heapless mode |
| **15.8** | **Async event wrappers** |

The DSL now produces production-grade Rust for any target: hosted, allocator-equipped MCU, allocator-free MCU, sync or async. Same `.onto` source → multiple compilable Rust crate variants.

## Cumulative

| Phase | Tests | Cumul. |
|---|---|---|
| 2 – 15.7 | 500 | 500 |
| **15.8** | **14** | **514 / 539** |

## Backlog (non-Rust)

- Allen runtime (still needs time model)
- Bidirectional codegen (still speculative)
- Workspace LSP features (multi-file refactor)
