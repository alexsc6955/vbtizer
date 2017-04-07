# Vbtiver

Vbtizer is a tiny css framework built using sass. You can use it as a basis for your own projects. Feel free to make pull requests.

## Requirements

Sass requires Rubi. If you're using Windows you should [download the installer](http://rubyinstaller.org/). You need the version >= 1.8.7 to use Sass.

Install Sass using the command prompt line.

```
$ gem install sass
```

Check the version using:

```
$ sass -v
```

Now you need to download vbtizer or clone it using ``git``.

```
$ git clone git@github.com:Rincorpes/vbtizer.git
```

## Usage

To use the current features just by adding the **vbtizer** file located in the css dir into your project and call it with a ``<link>`` HTML tag.

If you want to add your own features, then you have to compile them using sass.

Open the src dir.

```
$ cd ~/src/
```
Then compile the project

```
sass --style compressed vbtizer.scss:[your css file path]

```

## Features

- ``rem`` to ``px`` converter.
- ``box-sizing`` mixin to use vendor prefix
- Layout breakpoints mixins.
- Use ``rem`` and ``px`` with the same property for older browsers and ie support.
- Normalize v5
- Reset Css.
