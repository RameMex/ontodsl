/**
 * DB connection singleton + Drizzle client.
 *
 * Uses @libsql/client (prebuilt native — no node-gyp) against a
 * local SQLite file. Same Drizzle schema works against a Turso
 * remote DB by changing only the `url:` to a libsql:// URL.
 */
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema.js";
import { resolve } from "node:path";

const dbPath = resolve(process.cwd(), "banking.db");
export const client = createClient({ url: `file:${dbPath}` });
export const db = drizzle(client, { schema });
export * from "./schema.js";
