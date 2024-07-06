# template web component
![tests](https://github.com/substrate-system/icons/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Icons as web components.

## install

```sh
npm i -S @substrate-system/icons
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

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

### pre-built HTML
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then use the tags in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/icons/dist/eye-regular.min.js ./public/eye-regular.js
```

### ESM
```js
import '@substrate-system/icons/eye-regular'
```

### Common JS
```js
require('@substrate-system/icons/eye-regular')
```
