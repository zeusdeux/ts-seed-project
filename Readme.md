# ts-seed-project

## Motivation

Setting up tooling, etc always gets in the way of focusing on what you're trying to build.
This tries to take away some of that pain for Typescript.

## What it sets up?

This project sets up a Typescript project that uses `tslint` as the linter, `prettier` as the code formatter and `jest` for testing.
I'd recommend taking a look at the `tsconfig.json`, `tslint.json`, `.prettierrc` and `package.json['jest']` to understand what defaults have been setup for you.

It also sets up `prettier` and `tslint` to run on git commit using `husky` for a `git` `pre-commit` hook and `lint-staged` to run the actual tasks themselves.
Dev workflow nirvana swiftly ensues!

#### Note

> 1. It does _not_ install _any_ type definitions so please do so after you follow the instructions in the next section.
> 2. In `tsconfig.json`, `compilerOptions.composite`, `compilerOptions.declaration` and `compilerOptions.declarationMap` are turned on to add [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) support

## How to use this seed project

1. Clone this repo
2. Run `npm install`
3. Code away!

No type definitions are installed as they're specific to your project.
You can install type definitions for your project (e.g., `npm i @types/node` if it's a backend project) as you normally would.

If things don't work as expected, go back to step 1.

If you're using this to write a [lambda](https://zeit.co/docs/v2/deployments/concepts/lambdas/#conceptual-model) that will be deployed to [@zeithq's platform](https://zeit.co), then I recommend using it alongside [get-now-json](https://github.com/zeusdeux/get-now-json) which is hosted at [now-json.zdx.cat](https://now-json.zdx.cat) to scaffold out a `now.json`.

#### Note

> 1. From `package.json['jest']['roots']`, remove the directories that don't exist or aren't roots.
>    For e.g., in my personal projects, I usually remove `"<rootDir>/lib/"` as I keep my code in `src`

## Config overrides

### `tsconfig.json`

- Update `include` array to reflect your project directory structure if necessary
- Update `compilerOptions.target` based on what minimum runtime capabilities your app has access to
- Update `compilerOptions.module` if you want to target the browser
- Update `compilerOptions.lib` if you want to add/remove libs that are auto injected by `tsc`
- Add `compilerOptions.typeRoots` if you want `tsc` to look into custom folders for type definitions
  - It defaults to looking for type declarations in `node_modules/@types/<module>`
    - Please note that the it does a node style resolution which means first it looks in `./node_modules/@types`, followed by `../node_modules/@types` and so on
- To turn off [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) support, remove `compilerOptions.composite`, `compilerOptions.declaration` and `compilerOptions.declarationMap`

### `tslint.json`

- Add `jsRules` if you want to `tslint` to also lint `.js` and `.jsx` files

### `.prettierrc`

This mostly uses the defaults except for `printWidth`, `semi` and `singleQuote`

### `jest`

This is found under the `jest` key in `package.json`. Feel free to modify those to your liking.
Also, `ts-jest` is configured in that subtree as well.
