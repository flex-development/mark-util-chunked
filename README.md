# mark-util-chunked

[![github release](https://img.shields.io/github/v/release/flex-development/mark-util-chunked.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/mark-util-chunked/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-chunked.svg)](https://npmjs.com/package/@flex-development/mark-util-chunked)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-chunked.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-chunked?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-chunked)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-chunked)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-chunked?cache)](https://bundlephobia.com/package/@flex-development/mark-util-chunked)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-chunked)](https://bundlephobia.com/package/@flex-development/mark-util-chunked)
[![codecov](https://codecov.io/gh/flex-development/mark-util-chunked/graph/badge.svg?token=qg27xOQM1a)](https://codecov.io/gh/flex-development/mark-util-chunked)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark-util-chunked.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

[`mark`][mark] utility to splice and push into giant arrays.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`push<T>(list, items)`][api-push]
  - [`splice<T>(list, start, remove[, items])`][api-splice]
- [Types](#types)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)
- [Related](#related)

## What is this?

This package exposes algorithms for splicing and pushing into giant arrays.

## When should I use this?

This package is useful when creating your own your own [mark][] extensions and utilities.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-chunked
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { push, splice } from 'https://esm.sh/@flex-development/mark-util-chunked'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { push, splice } from 'https://esm.sh/@flex-development/mark-util-chunked'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifiers [`push`][api-push] and [`splice`][api-splice].\
There is no default export.

### `push<T>(list, items)`

**TODO**: `push<T>(list, items)`

### `splice<T>(list, start, remove[, items])`

**TODO**: `splice<T>(list, start, remove[, items])`

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Project

### Version

mark-util-chunked adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

## Related

- [`@flex-development/mark`][mark] — the specification
- [`@flex-development/mark-compiler`][mark-compiler] — finite state machine event compiler
- [`@flex-development/mark-parser`][mark-parser] — finite state machine parser

[api-push]: #pushtlist-items

[api-splice]: #splicetlist-start-remove-items

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[mark-compiler]: https://github.com/flex-development/mark-compiler

[mark-parser]: https://github.com/flex-development/mark-tokenizer

[mark]: https://github.com/flex-development/mark

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
