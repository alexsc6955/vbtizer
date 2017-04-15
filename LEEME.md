# Vbtiver

Vbtizer es un pequeño framework css. Lo puedes tomar como base para tus propios proyectos o colaborar para hacerlo crecer.

[English version](https://github.com/Rincorpes/vbtizer/REEDME.md)

## Contenido

Dentro de **Vbtizer** puedes encontrar la siguiente estructura de directorios:

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

#### El directorio ``dist``

Contiene el css, javascript y las fuentes listas para ser usadas.

#### El directorio ``js``

Contiene el constructor de plugins y ltodos los plugins que se han desarrollado, además la versión descomprimida del javascript precompilado de Vbtizer.

#### El directorio ``sass``

Contiene el codigo fuente de la salida css, y la version descomprimida del css.

## Comenzando

**Vbtizer** está en estado de desarrollo pero puedes [descargarlo](https://github.com/Rincorpes/vbtizer/archive/master.zip) y comenzar a usarlo con tan solo agregar los archivos ``vbtizer.min.css`` y ``vbtizer.min.js`` localizados en ``dist/css`` y ``dist/js`` respectivamente.

Necesitas **jQuery** para hacer que los plugins javascript de Vbtizer funcionen.

También puedes clonar todo el código desde el [repositorio](https://github.com/Rincorpes/vbtizer) y desarrollar usandolo como base.

### Acerca de contribuir

**Vbtizer necesita de tu ayuda para crecer**. Por el momento Vbtizer ha sido desarrollado por [Rincorpes](https://github.com/Rincorpes) pero la idea es que hagas contribuciones así que por favor, sientete libre de descargar el código, hacer cambios y enviar un pull request.

## Caracteristicas

1. Utilidad ``rem`` a ``px`` que hace más facil el diseño adaptable.
2. Propiedades css y mixins que incluyen prefijos de proveedores.
3. Puntos de quiebre en el layout para el diseño adaptable.
4. Normalize v5.
5. Reset css.
6. Sistema de rejilla.
7. Estilos base para tipografías, imágenes y código.
8. Fuente de iconos vbt-icons.
9. Utilidades: Clases css y mixins para ayudarte a reducir el tiempo de código.
10. Componentes css preconstruidos.
11. Plugins jQuery para algunos componentes.