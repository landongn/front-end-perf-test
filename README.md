# interview

Contained in this project is a collection of poisons.  Over the course of the interview, we ask you to detect and fix as many of these toxic implementations as possible.

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

- a grid of images for the user to choose from

- a details page of a users selection

- a series of components to implement the individual features

- a series of animation interactions for the user

- a collection of SCSS stylesheets implementing the styles and some animations.

- A missing implementation for infinitely scrolling lists for the game selection. 
  - for this, some details:
    - if you imagine what netflix looks like: You have a 2 dimensional grid of information, broken into categories. 
    - You can infinitely loop a particular category on the x axis
    - you can infinitely loop through the categories on the y axis
    - bonus points if this is keyboard friendly
    - completely optional / bonus 

- a missing layout for the detail page
  - the detail page has overlapping text, no formatting, and needs a layout. 
  - think of this as a [css zen garden](http://www.csszengarden.com/)
   challenge.

an Ideal PR would be to not only complete as much work as you are able, but to focus in areas you are most comfortable in working rapidly. Put another way, if you feel the most comfortable fixing visual problems, tackle those first. Want to improve the framerate? Go for it.  Try to tackle the work you can most ably handle completing within the time limit. 

Be sure to:

- Collect information about things you notice
- assess the priority of those
- implement / refactor those solutions, based on your data.

To be absolutely clear:  This project contains several potential areas for you to focus on. Most of them will take up a majority of your time as individual tasks. That's fine.  Try to get done as much as you can.

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
