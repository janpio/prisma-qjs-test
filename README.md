Minimum implementation case for testing compatibility issues in QuickJS.

- Run locally via TS with `pnpm exec dotenv ts-node-esm src/index.ts` (automatically loads env vars from `.env`)
- Run locally via TS with `pnpm webpack --mode=production && pnpm dotenv node dist/bundle.js`