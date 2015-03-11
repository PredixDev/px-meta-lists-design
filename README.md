# Meta Lists

The Meta Lists module is a shortcut collection of all Predix Experience list related modules.

## Dependency

Px's Meta Lists module depends on four other Px modules:

* [px-list-bare-design](https://github.sw.ge.com/pxc/px-list-bare-design)
* [px-list-buttons-design](https://github.sw.ge.com/pxc/px-list-buttons-design)
* [px-list-inline-design](https://github.sw.ge.com/pxc/px-list-inline-design)
* [px-list-ui-design](https://github.sw.ge.com/pxc/px-list-ui-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-meta-lists-design.git

Once installed, `@import` into your project's Sass file in its Meta layer:

    @import "../px-meta-lists-design/meta.lists";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Variable Flags

By using Meta Lists you will also set these module feature switches to `true`:

    $inuit-enable-list-inline--delimited

    $inuit-enable-list-ui--tiny
    $inuit-enable-list-ui--small
    $inuit-enable-list-ui--large
    $inuit-enable-list-ui--huge
