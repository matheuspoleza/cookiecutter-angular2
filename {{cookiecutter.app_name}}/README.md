# Introduction

[![Angular 2 Style Guide](https://{{cookiecutter.github_username}}.github.io/angular2-style-guide/images/badge.svg)](https://github.com/{{cookiecutter.github_username}}/angular2-style-guide)
[![Build Status](https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}.svg?branch=master)](https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}})
[![Build Status](https://ci.appveyor.com/api/projects/status/github/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}?svg=true)](https://ci.appveyor.com/project/{{cookiecutter.github_username}}/{{cookiecutter.app_name}})
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}.svg)](https://david-dm.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}})
[![devDependency Status](https://david-dm.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}/dev-status.svg)](https://david-dm.org/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}#info=devDependencies)

A modular {{cookiecutter.app_name}} project for Angular 2 apps.

It is something similar to the Angular Quick Start but does the entire build with gulp.

`{{cookiecutter.app_name}}` provides the following features:

- Allows you to painlessly update the {{cookiecutter.app_name}} tasks of your already existing project.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices for your application’s structure](https://github.com/{{cookiecutter.github_username}}/angular2-style-guide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.
- Basic Service Worker, which implements "Cache then network strategy".

# How to start

**Note** that this {{cookiecutter.app_name}} project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speedup the build on Windows](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}/wiki/Speed-up-the-build-on-Windows)**.

In order to start the {{cookiecutter.app_name}} use:


```bash
git clone --depth 1 https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}.git
cd {{cookiecutter.app_name}}
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Advanced {{cookiecutter.app_name}} Option](#advanced-{{cookiecutter.app_name}}-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# How to extend?

Visit the [Wiki page](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}/wiki) of the project.

# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributing

Please see the [CONTRIBUTING](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.app_name}}/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Advanced Seed Option

An [advanced option to this {{cookiecutter.app_name}} exists here](https://github.com/NathanWalker/{{cookiecutter.app_name}}-advanced) which mirrors the latest changes here but adds core support for:

- [ngrx/store](https://github.com/ngrx/store) RxJS powered state management, inspired by **Redux**
- [ngrx-store-router](https://github.com/CodeSequence/ngrx-store-router) middleware for syncing state with Angular 2 Router.
- [ng2-translate](https://github.com/ocombe/ng2-translate) for i18n
- [lodash](https://lodash.com/) Helps reduce blocks of code down to single lines and enhances readability
- [NativeScript](https://www.nativescript.org/) cross platform mobile (w/ native UI) apps.
- More coming in the future...

You may use it to learn how to extend this {{cookiecutter.app_name}} for your own use cases or use the advanced {{cookiecutter.app_name}} if your project needs those features.

# Examples

Forks of this project demonstrate how to extend and integrate with other libraries:

 - https://github.com/justindujardin/{{cookiecutter.app_name}} - integration with [ng2-material](https://github.com/justindujardin/ng2-material)
 - https://github.com/archfirst/{{cookiecutter.app_name}}-sass - integration with [Sass](http://sass-lang.com/)
 - https://github.com/DeviantJS/{{cookiecutter.app_name}}-material2 - integration with [Angular2-Material](https://github.com/angular/material2)
 - https://github.com/AngularShowcase/angular2-sample-app - sample Angular 2 application
 - https://github.com/AngularShowcase/ng2-bootstrap-sbadmin - ng2-bootstrap-sbadmin
 - https://github.com/AngularShowcase/{{cookiecutter.app_name}}-ng2-highcharts - Simple application including a [Highcharts](http://www.highcharts.com) graph.
 - https://github.com/tarlepp/angular-sailsjs-boilerplate-frontend-angular2 - Example application for [Sails.js](http://sailsjs.org/) integration.
 - https://github.com/ludohenin/ng2-wp-blog - Angular 2 application using Wordpress [JSON-API](http://v2.wp-api.org) backend.
 - https://github.com/AngularShowcase/{{cookiecutter.app_name}}-example-mashup - Angular 2 application demonstrating the use of [Redux](http://redux.js.org/), [D3](https://github.com/mbostock/d3), [socket io](https://github.com/socketio), [Google Charts](https://developers.google.com/chart/), and [RxJs](https://github.com/Reactive-Extensions/RxJS)

# Directory Structure

```
.
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   ├── home
│   │   └── components
│   ├── index.html
│   ├── main.ts
│   ├── shared
│   │   └── services
│   │       ├── name-list...
│   │       └── name-list...
│   └── sw.js                  <- sample service worker
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── {{cookiecutter.app_name}}.config....
│   │   └── {{cookiecutter.app_name}}.config.ts     <- generic configuration of the {{cookiecutter.app_name}} project
│   ├── config.ts              <- exported configuration (merge both {{cookiecutter.app_name}}.config and project.config, project.config overrides {{cookiecutter.app_name}}.config)
│   ├── debug.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.pac...
│   │   └── {{cookiecutter.app_name}}               <- {{cookiecutter.app_name}} manual ambient typings
│   │       ├── merge-stre..
│   │       └── slash.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.tas...
│   │   └── {{cookiecutter.app_name}}               <- {{cookiecutter.app_name}} generic gulp tasks. They can be overriden by the project specific gulp tasks
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util...
│   │   ├── project.utils.ts
│   │   ├── {{cookiecutter.app_name}}               <- {{cookiecutter.app_name}} specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change...
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_loc...
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── {{cookiecutter.app_name}}.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
└── appveyor.yml
```

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
