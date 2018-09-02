# ts-seed-project

## Motivation

Setting up tooling, etc always gets in the way of focusing on what you're trying to build.
This tries to take away some of that pain for Typescript.

## What it sets up?

This project sets up a Typescript project that uses `tslint` as the linter and `prettier` as the code formatter.

## How to use this seed project

1. Clone this repo
2. Run `npm run prepare`
3. Update `package.json` to reflect your project (e.g., update `name`, `version`, `author`, `license`, `description`, `scripts`, etc)

## Config overrides

### `tsconfig.json`

- Update `compilerOptions.target` based on what minimum runtime capabilities your app has access to
- Update `compilerOptions.module` if you want to target the browser
- Update `lib` if you want to add/remove libs that are auto injected by `tsc`
- Add `compilerOptions.typeRoots` if you want `tsc` to look into custom folders for type definitions.
  - It defaults to looking for type declarations in `node_modules/@types/<module>`
      - Please note that the it does a node style resolution which means first it looks in `./node_modules/@types`, followed by `../node_modules/@types` and so on
- `composite`, `declaration` and `declarationMap` are turned on to add [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) support

### `tslint.json`

- Add `jsRules` if you want to `tslint` to also lint `.js` and `.jsx` files

### `.prettierrc`

This mostly uses the defaults except for `printWidth`, `semi` and `singleQuote`
