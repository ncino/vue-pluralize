# vue-pluralize
[![npm version](https://badge.fury.io/js/vue-pluralize.svg)](https://badge.fury.io/js/vue-pluralize)
[![Build Status](https://travis-ci.org/SimpleNexus/vue-pluralize.svg?branch=master)](https://travis-ci.org/SimpleNexus/vue-pluralize)
[![Monthly Downloads](https://img.shields.io/npm/dm/vue-pluralize.svg)](https://www.npmjs.com/package/vue-pluralize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Handy [Pluralize](https://github.com/blakeembrey/pluralize#readme) filters for your [Vue](http://vuejs.org/) project.

## Installation

Install via NPM...

```sh
$ npm install vue-pluralize
// or
$ yarn add vue-pluralize
```

Import and use like so:

```js
import VuePluralize from 'vue-pluralize'

Vue.use(VuePluralize)
```

## Usage

Simply set `pluralize` as the filtering function and you're good to go. At least one argument is expected, which is the number of items.

```html
<span>{{ 'user' | pluralize(10) }}</span>
<!-- renders -->
<span>users</span>
```

## this.$pluralize

`vue-pluralize` attaches the Pluralize instance to your Vue app as `this.$pluralize`.

This allows you to call Pluralize from the script portion of your Vue component.

You can [add new rules](https://github.com/blakeembrey/pluralize#usage) by adding them to the root Pluralize instance.

