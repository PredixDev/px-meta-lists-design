# Meta Lists

The Meta Lists module is a shortcut collection of all Predix Experience list related modules.

## Dependency

Px's Meta Lists module depends on three other Px modules:

* [px-list-bare-design](https://github.build.ge.com/PXd/px-list-bare-design)
* [px-list-inline-design](https://github.build.ge.com/PXd/px-list-inline-design)
* [px-list-ui-design](https://github.build.ge.com/PXd/px-list-ui-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-meta-lists-design.git

Once installed, `@import` into your project's Sass file in its Meta layer:

    @import "../px-meta-lists-design/meta.lists";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Variable Flags

By using Meta Lists you will also set these module feature switches to `true`:

    $inuit-enable-list-inline--delimited

    $inuit-enable-list-ui--tiny
    $inuit-enable-list-ui--small
    $inuit-enable-list-ui--large
    $inuit-enable-list-ui--huge
