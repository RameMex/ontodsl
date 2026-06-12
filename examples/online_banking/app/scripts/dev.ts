/**
 * Dev runner — boots the API server (port 5174) and lets Vite
 * (started separately via `npm run dev`) proxy /api/* to it. The
 * package.json scripts wire this together as `dev:server` + `dev:web`,
 * but for a one-command experience we recommend two terminals.
 */
import { createApiServer } from "../src/server/index.js";

createApiServer(5174);
