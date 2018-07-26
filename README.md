# Popeye; The Express Generator 

<p align="center">
  <img src="https://github.com/isurusiri/generator-popeye/blob/master/popeye.png">
</p>

[![NPM version][npm-image]](https://www.npmjs.com/package/generator-popeye) [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A yeoman generator for express.js

## Installation

First, install [Yeoman](http://yeoman.io) and generator-popeye using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-popeye
```

Then generate your new project by providing a name:

```bash
yo popeye coolestapp
```
You will be asked to provide a mongodb connection URL along the way.

Generate your modules whenever you need:

```bash
yo popeye:module coolest
```

## Folder structure

Based on above command serquece, popeye will generate the following folder structure for your next exciting project.

```
|-- coolestapp/
|---- app/
|------ modules/
|-------- root-module/
|---------- root-controller.js
|---------- root-model.js
|---------- root-service.js
|-------- coolest-module/
|---------- coolest-controller.js
|---------- coolest-model.js
|---------- coolest-service.js
|---- node_modules/
|---- index.js
|---- package.json
|---- routes.js
```
Note that Popeye will edit the route.js file to include newly added modules like below,

```
var coolestController = require('./app/modules/coolest-module/coolest-controller');

router.use('/coolest', coolestController);
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [isurusiri](https://isurusiri.com/)


[npm-image]: https://badge.fury.io/js/generator-popeye.svg
[npm-url]: https://npmjs.org/package/generator-popeye
[travis-image]: https://travis-ci.org/isurusiri/generator-popeye.svg?branch=master
[travis-url]: https://travis-ci.org/isurusiri/generator-popeye
[daviddm-image]: https://david-dm.org/isurusiri/generator-popeye.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/isurusiri/generator-popeye
