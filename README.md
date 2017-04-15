# Vbtiver

Vbtizer is a tiny css framework. You can use it as a basis for your own projects or contribute to make it grow.

[Versión en español](https://github.com/Rincorpes/vbtizer/LEEME.md)

## Contents

Inside **Vbtizer** you can find the following directory structure:

```
vbtizer/
├── dist/
│	├── css/
│	├── fonts/
│	└── js/
├──	js/
│	├── build/
│	├── core/
│	└── plugins
└── scss/
	├── base/
	├── componets/
	├── dist/
	└── mixins/
```

#### The ``dist`` directory

Contains the css, javascript and fonts, ready to be used.

#### The ``js`` directory

Contains the plugins builder and all plugins that has been developed, besides the uncompressed version of the precompile Vbtizer javascript.

#### The ``sass`` directory

Contains the source code for the css output, and the uncompressed version of the css.

## Getting Started

**Vbtizer** is on development status but you can [download it](https://github.com/Rincorpes/vbtizer/archive/master.zip) and start using it just by adding the files ``vbtizer.min.css`` and ``vbtizer.min.js`` located on ``dist/css`` and ``dist/js`` respectively.

You need **jQuery** to make Vbtizer javascript plugins work.

Besides you can clone the whole code from its [repository](https://github.com/Rincorpes/vbtizer) and build using it as a basis.

### About contributing

**Vbtizer needs your help to grow**. By the moment Vbtizer has been developed by [Rincorpes](https://github.com/Rincorpes) but the idea it's you to make contributions so please feel free to download it, make changes and make a pull request.

## Features

1. ``rem`` to ``px`` utility which makes easier responsive design.
2. Css properties mixins that include vendor prefixes.
3. Layout breakpoint for responsive design.
4. Normalize v5.
5. Reset css.
6. Grid System.
7. Base styles for Typography, images and code.
8. vbt-icons font
9. Utilities: css classes and mixins to help you minify your coding time.
10. Prebuilt css components.
11. jQuery plugins for some components.