# Lists

The Predix Experience Lists module provides very basic styling for regular ordered and
unordered lists. This module is a fork of the [inuitcss lists module](https://github.com/inuitcss/base.lists).

## Dependency

Px's Lists module depends on one other Px module:

* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Installation

Install this module and its dependency using bower:

    bower install --save https://github.sw.ge.com/pxc/px-lists-design.git

Once installed, `@import` into your project's Sass file in its Base layer:

    @import "px-tables-design/sass/base.lists";

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('base.lists') { ... }
