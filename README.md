# icons
![tests](https://github.com/substrate-system/icons/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Icons as web components.

This package **does not register component names**. See [the *use* section](#use) for more information.

**See [a live demonstration](https://substrate-system.github.io/icons/)**.

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [install](#install)
- [components](#components)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built JS](#pre-built-js)
- [credits](#credits)

<!-- tocstop -->

</details>

## install

```sh
npm i -S @substrate-system/icons
```

## components

Visible in the [src folder](./src/). The filename corresponds to the default component name.

* `@substrate-system/icons/eye-regular`
* `@substrate-system/icons/eye-slash`
* `@substrate-system/icons/edit-square`
* `@substrate-system/icons/edit-pencil`


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
In the interest of interoperability, **we do not register any components**, you will need to call `customElements.define('comonent-name', ComponentClass)` yourself:

```js
import { EditSquare } from '@substrate-sustem/icons'

customElements.define('component-name', EditSquare)
```

Or call the helper function, `regiser`:
```js
import { register } from '@substrate-system/icons'

// this will load and register all components,
// using the default component names
register()
```

Or register components individually, with the default names:
```js
import { regiser } from '@substrate-system/icons/edit-pencil'

// this will register with the default component name, 'edit-pencil'
register()
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

## credits

These icons come from the free SVG files of [fontawesome](https://fontawesome.com/).
