# interview

Contained in this project are a collection of poisons.  Over the course of the interview, we ask you to detect and fix as many of these toxic implementations as possible.

Specifically:

- [fork](https://help.github.com/articles/fork-a-repo/) this repository to your personal github account. Create one if you don't already have one.
- create a [pull request](https://www.google.com/search?q=pull+request) on your fork to contain your changes.
- Include any relevant debugging findings, notes, or tasks in your PR.  Screenshots work great, too. 
- When you're finished with something that both builds and renders, as close as you can get to 3 hours, send back an email with a link to the PR.  
- We'll reconnect briefly on the phone to do some Q&A when you're finished.

As general advice, take some time to familiarize yourself with the webapp UI first, and then dive into the code.

If possible, include any supporting materials (screenshots, etc) of potential issues that you identify but might not have time to implement a solution for.

The user experience is pretty straightforward; there's a catalog of games for a user to choose from, and a deeper view into the individual game, separated into routes.

The application is separated into a few concerns:

- a 'store' service that maintains application state, and a mechanism for updating it. 
  - this should be the most stable implementation
  - you ask the store to perform operations and maintain state, follow the pattern present for any additions
  - the store is injectable in your components, controllers, and routes via `Ember.inject.service('state')`

- a grid of images for the user to choose from
  - this contains various performance issues, layout issues, and CSS issues

- a details page of a users selection
  - this contains things like the synopsis of the game, box art, and a background image / hero image
  - this is missing a lot of the layout
  - this contains severe visual issues

- a collection of components to implement the individual features
  - there are components to render the grid of games on the index page [see below]
  - there are components necessary on the detail page, however none yet exist.

- a collection of animation interactions for the user
  - these are implemented, however, we have noticed some framerate issues...
  - the detail page does not have any implemented animations

- a collection of SCSS stylesheets implementing the styles and some animations.

- A missing implementation for infinitely scrolling lists for the game selection. 
  - if you imagine what netflix looks like: You have a 2 dimensional grid of information, broken into categories. 
  - You can infinitely loop a particular category on the x axis
  - you can infinitely loop through the categories on the y axis
  - bonus points if this is keyboard friendly
  - completely optional / bonus 

- a missing layout for the detail page
  - the detail page has overlapping text, no formatting, and needs a layout. 
  - think of this as a [css zen garden](http://www.csszengarden.com/)
   challenge.

Each of the above bullets could easily be filed into issues in the forked copy of your repo and closed via `closes #[PR number here]` in commit messages.

Be sure to:

- Collect information about things you notice.  Screenshots of the profiler, notes in `// #TODO:` comments, etc.
- assess the priority of those.  Again, the recommendation is to utilize github's built in issue and PR system, though not required.
- implement / refactor those solutions, based on the above.

To be absolutely clear:  This project contains several potential areas for you to focus on. Most of them will take up a majority of your time as individual tasks. That's fine.  Try to get done as much as you can. This isn't strictly a code challenge. 

Try to keep it close to 3 hours.  The clock starts when you fork the repo. 

Good hunting.

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
