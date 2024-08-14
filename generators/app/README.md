# workspace

A pnpm workspace boilerplate for Typescript projects.

## Features

- Managed with `pnpm`, ensuring efficient package management.
- ESLint configuration extending [`eslint-config-dsfx3d`](https://github.com/dsfx3d/eslint-config-dsfx3d).
- Sample module `foo` exported in the main index.

## Workspace Structure

The workspace is structured as follows:

- Main packages are located in the `packages/` directory.
- Additional components can be added in the `components/` directory.
- Packages inside `test` directories are excluded.

## Installation

To set up the workspace:

```bash
pnpm bootstrap
```

## Scripts

- `bootstrap`: Update packages and install Husky hooks.

## Dependencies

- Development:
  - `@commitlint/cli`
  - `@commitlint/config-conventional`
  - `eslint`
  - `eslint-config-dsfx3d`
  - `husky`
  - `prettier`
  - `typescript`

---

# packageName

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]

This is my package description.

## Usage

Install package:

```sh
# npm
npm install packageName

# yarn
yarn add packageName

# pnpm
pnpm install packageName
```

Import:

```js
// ESM
import {} from "packageName";

// CommonJS
const {} = require("packageName");
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/packageName?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/packageName
[npm-downloads-src]: https://img.shields.io/npm/dm/packageName?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/packageName
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/packageName/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/packageName
[bundle-src]: https://img.shields.io/bundlephobia/minzip/packageName?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=packageName
