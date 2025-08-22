# icons
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/icons/nodejs.yml?style=flat-square)](https://github.com/substrate-system/icons/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/icons?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/icons)
[![GZip size](https://flat.badgen.net/bundlephobia/minzip/@substrate-system/icons?color=green)](https://bundlephobia.com/package/@substrate-system/icons)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


Icons as web components.

**See [a live demonstration](https://substrate-system.github.io/icons/)**.

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [Components](#components)
- [Modules](#modules)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [Use](#use)
  * [SSR](#ssr)
  * [Define](#define)
  * [JS](#js)
  * [Attributes](#attributes)
  * [HTML](#html)
  * [Pre-built JS](#pre-built-js)
- [See Also](#see-also)
- [Credits](#credits)

<!-- tocstop -->

</details>

## Install

```sh
npm i -S @substrate-system/icons
```

## Components

Visible in the [src folder](./src/), the filename corresponds to the default
component name.

[See the demo page](https://substrate-system.github.io/icons/) for a list of
all components with names.

* `@substrate-system/icons/eye-regular`
* `@substrate-system/icons/eye-slash`
* `@substrate-system/icons/edit-square`
* `@substrate-system/icons/edit-pencil`
* `@substrate-system/icons/save-cloud`
* `@substrate-system/icons/log-out`
* `@substrate-system/icons/new-tab`
* `@substrate-system/icons/heart-outline`
* `@substrate-system/icons/github-logo`


## Modules

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/icons/eye-regular'
```

### Common JS
```js
require('@substrate-system/icons/eye-regular')
```

## Use
In the interest of interoperability, **we do not define any components**, you
will need to call `customElements.define('component-name', ComponentClass)`
yourself:

```js
import { EditSquare } from '@substrate-system/icons'

customElements.define('component-name', EditSquare)
```

### SSR
Server-side render by importing from the path `/ssr`.

```js
import { githubLogo } from '@substrate-system/icons/ssr'

// this is a function that returns a string
const html = githubLogo()
```

### Define

Call the helper function, `define`:
```js
import { define } from '@substrate-system/icons'

// this will load and register all components,
// using the default component names
define()
```

Or register components individually, with the default names:
```js
import { define } from '@substrate-system/icons/edit-pencil'

// this will register with the default component name, 'edit-pencil'
define()
```

See [the `isRegistered`](https://github.com/substrate-system/web-component#isregistered)
helper function in `@substrate/web-component` for help with name collisions.

### JS
```js
import '@substrate-system/icons/eye-regular'
```

### Attributes

Pass in a `title` attribute to change the `svg` title. If `title` is omitted,
it will render with a default `title`.

### HTML
```html
<div>
    <eye-regular title="See something"></eye-regular>
</div>
```

### Pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### Copy
```sh
cp ./node_modules/@substrate-system/icons/dist/eye-regular.min.js ./public
```

#### HTML
```html
<script type="module" src="./eye-regular.min.js"></script>
```

## See Also

* [Accessible SVG Icons](https://css-tricks.com/accessible-svg-icons/)
* [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
* [Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)

## Credits

These icons come from the free SVG files of [fontawesome](https://fontawesome.com/).
