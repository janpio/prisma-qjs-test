Minimum implementation case for testing compatibility issues in QuickJS.

- Run locally via TS with `pnpm exec dotenv ts-node-esm src/index.ts` (automatically loads env vars from `.env`)
- Run locally via JS with `pnpm webpack --mode=production && pnpm dotenv node dist/bundle.js`
- Run locally via QuickJS: 
    - `git clone https://github.com/bellard/quickjs`
    - `cd quickjs && make && sudo make install`
    - `qjs --unhandled-rejection ./dist/bundle.js`

- Beautify bundle to get better line numbers: `pnpm js-beautify ./dist/bundle.js --replace` before running via JS or QuickJS