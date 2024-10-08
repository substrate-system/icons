# icons
![tests](https://github.com/substrate-system/icons/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Icons as web components.

See [a live demonstration](https://substrate-system.github.io/icons/).

<!-- toc -->

## install

```sh
npm i -S @substrate-system/icons
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/icons/eye-regular'
```

### Common JS
```js
require('@substrate-system/icons/eye-regular')
```

## use

In the interest of interoperability, **we do not register any components**, you will need to call ``:

```js
import { EditSquare } from '@substrate-sustem/icons'

customElements.define('edit-square', EditSquare)
```

### JS
```js
import '@substrate-system/icons/eye-regular'
```

### HTML
```html
<div>
    <eye-regular></eye-regular>
</div>
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/icons/dist/eye-regular.min.js ./public
```

#### HTML
```html
<script type="module" src="./eye-regular.min.js"></script>
```

## components

Visible in the [src folder](./src/).

* `@substrate-system/icons/eye-regular`
* `@substrate-system/icons/eye-slash`
* `@substrate-system/icons/edit-square`
* `@substrate-system/icons/edit-pencil`

## credits

These icons come from the free SVG files of [fontawesome](https://fontawesome.com/).
