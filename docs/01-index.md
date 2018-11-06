---
title: Fractal + Twig
---

'Fractal + Twig' is a collection of examples and configurations for bootstrapping a [Fractal]-generated Style Guide using [Twig] as it's templating engine.

# Requirements

Fractal + Twig requires [Node.js] v4.4.7+ to run.

# Installation

First, clone this project to your desired directory using your desired git client.

Or open up your terminal and run the following commands:

```
$ cd <your-desired-directory>
$ git clone https://github.com/joshuacerbito/fractal-twig.git
```

Once the cloning is successful, install all the dependencies via npm:

```
$ npm install
```

Finally, install the Fratal CLI tool globally

```
$ npm install -g @frctl/fractal
```

# Usage

Before you run any of these commands, make sure you're on the root directory of your project.

To compile your project to static HTML
```
$ fractal build
```

To load up your Fractal project in the Browser
```
$ fractal start
```

To load up Fractal with BrowserSync, run:
```
$ fractal start --sync
```

# To-Do

* Add missing filters and functions
* Include styling
* Include basic JS behaviours
* Config file for publishing all twig files to a different directory

[Fractal]: http://fractal.build
[Twig]: http://twig.sensiolabs.org
[Node.js]: http://nodejs.org