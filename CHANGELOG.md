## v-0.7

### v-0.7.0

**Changes**

- ``.navbar .nav`` y margins fixed
- Dropdown component added
	- Basic elements
	- Basic styles
- The project now uses node package manager
	- Node modules
		- babel-cli: ^6.24.1
		- babel-core: ^6.24.1
		- babel-loader: ^6.4.1
		- babel-preset-es2015: ^6.24.1
		- grunt: ^1.0.1
		- grunt-cli: ^1.2.0
		- grunt-contrib-uglify: ^2.3.0
		- node-sass: ^4.5.2
		- nodemon: ^1.11.0
		- webpack: ^2.3.3
	- Scripts
		- webpack: webpack
		- grunt: grunt
		- build:js: npm run webpack & npm run grunt
		- build:css: node-sass -w scss/vbtizer.scss --output-style compressed dist/css/vbtizer.min.css
- To compile and minify the scss you use ``npm run build:css`` it uses the ``node-sass`` module to watch, compile and minify the ``css`` output.
- First test for the Dropdown jQuery plugin
- The jQuery plugins are supposed to be written with es6 so we use the ``webpack`` module to transpile them to es5 and then the ``grunt`` module to minify the output.

## v-0.6

### v-0.6.8

**Changes**

- Add style to ``.navbar-[light|inverse] .nav > li.active``
- Changed font-size/line-height from `14px/1.5` to ``.875rem/1`` on ``.vi`` css class
- Remove margin from ``.vi`` to prevent icon margins from affecting ``.list-inline`` design

### v-0.6.5

**Changes**

- ``remove-pointer-events`` mixin and css class added.

### v-0.6.4

**Changes**

- Some features added to ``.card``.
	- ``.card-header``
	- ``.card-title``
	- ``.card-subtitle``
	- ``.card-content``
	- ``.card-footer``
- ``center-block`` mixin added

### v-0.6.1

**Changes**

- VbtIcons comments added.

### v-0.6.0

**Changes**

- VbtIcons added.

## v-0.5

### v-0.5.20

**Changes**

- rem System impruvement.
- You can choose if you want to use px, rem or both.
	- ``$enable-rem-unit`` option added.
	- ``$enable-px-unit`` option added.
- Navbar component impruvement.
	- px and rem support.

### v-0.5.17

**Changes**

- Cards componet started.

### v-0.5.16

**Changes**

- base/_reset.scss
	- ``[role=button] {cursor: pointer;}`` to force buttons to have the pointer coursor.

### v-0.5.15

**Changes**

- Coments impruvments

### v-0.5.14

**Changes**

- Clearfix utilitiy added.
	- ``clearfix`` mixin, and ``.clearfix`` class to clean floats.
- Navbar component impruvment.
	- ``clearfix`` mixin added to ``.navbar`` to clean floats instead of ``overflow: hidden;``

### v-0.5.12

**Changes**

- Navbar component impruvment.
	- Now you can add an ``<h1>`` tag as a container for ``.navbar-brand`` without change the spaces and the font size.
	- ``float: left;`` added to the ``<h1>`` tag.
	- Impruved ``.navbar`` spaces
- Floats utilities added.
	- ``float-left`` and ``float-right`` mixins, and ``.float-left`` and ``float-right`` classes.

### v-0.5.8

**Changes**

- Navbar component impruvment.
	- ``.navbar-light`` class added.
	- ``.navbar-inverse`` class added.
	- ``.nav`` class added.
	- ``.navbar-brand`` class added.
	- ``.navbar-text`` class added.

### v-0.5.3

**Changes**

- ``.navbar`` ``margin-bottom`` changed to ``.5rem`` default.
- ``page-footer`` ``margin-top`` added.
- ``page-header`` ``margin-bottom`` changed to ``1rem`` that is the standar for the layout.

### v-0.5.0

**Changes**

- Navbar component added.

## v-0.4

### v-0.4.13

**Changes**

- ``.img-fluid`` css class added for resposive support.

### v-0.4.11

**Changes**

- ``.page-footer`` css class added.
- Isue #5 fixed.

### v-0.4.9

**Changes**

- Sections change to components.

### v-0.4.8

**Changes**

- Sections started.
- ``.page-header`` css class added

### v-0.4.7

**Changes**

- Description in headings using ``<small>`` or ``.small``.

### v-0.4.6

**Changes**

- ``box-shadow`` mixin added.
- Apply ``border-radius`` to ``<code>`` inline element.
- Apply ``border-radius`` to ``<kbd>`` element.
- Apply ``box-shadow`` to ``<kbd>`` element.
- Apply small ``border-radius`` to nested ``<kbd>`` element.

### v-0.4.2

**Changes**

- ``border-radius`` mixins added.

### v-0.4.0

**Changes**

- Code styles added.

## v-0.3

### v-0.3.4

**Changes**

- Issue #2 fixed.
- Found a bug similar to Issue #1 and solved it.
- ``media-break-point-max`` mixin added.

### v-0.3.1

**Changes**

- Issue #1 fixed.

### v-0.3.0

**Changes**

- Typography styles added.

## v-0.2

### v-0.2.2

**Changes**

- Issue #3 fixed.

### v-0.2.1

**Changes**

- ``.container-fluid`` class name fixed.

### v-0.2.0

**Changes**

- First version of the grid system finished.

## v-0.1

### v-0.1.3

**Changes**

- Grid system started.
- ``.container`` class added.
- ``.container-fluid`` added.

### v-0.1.2

**Changes**

- Simplfy ``media-breakpoint`` mixin.

### v 0.1.1

**Changes**

- Got better ``rem-px`` mixin.