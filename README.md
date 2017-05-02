# interview

Contained in this project is a collection of poisons.  Over the course of the interview, it is your job to detect and fix as many of these toxic implementations as possible.

As general advice, things that you patch may not be immediately obvious without the use of a profiler, such as Chrome Devtool's Timeline profiler.

If possible, include any supporting materials (screenshots, etc) of potential issues that you identify but might not have a solution for.

The application is separated into a few concerns:

- a 'store' service that maintains application state, and a mechanism for updating it.

- a grid of images for the user to choose from

- a details page of a users selection

- a series of components to implement the individual features

- a series of animation interactions for the user

- a collection of SCSS stylesheets implementing the styles and some animations.

Your goal is to audit the codebase to the best of your abilities and access which things to refactor and which things to simply report.  In effect, you should:

- Collect information about things you notice
- assess the priority of those
- implement / refactor those solutions, based on your data.

To be absolutely clear:  There are significant issues with some of the implementations of these files.  Rewriting portions as you see fit is strongly encouraged, should the data suggest it.  Trust your tools.

You have 3 hours.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd interview`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
