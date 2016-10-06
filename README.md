# HomeLibrary Seed Project

This repository is the starting point for much of the work in the book [Angular for Rails Developers](https://www.angularonrails.com/angular-rails-developers/).

The app doesn't _do_ anything but it's a solid starting point. All the test pass and the code is clean.

If you load the app in your browser, you'll simply see "app works!". If you want the Angular app to actually retrieve data from Rails, you can follow something like my [Angular 2 HTTP Example](https://www.angularonrails.com/angular-2-http-example/) post, although of course using this HomeLibrary project instead of AuthorWizard.

## Installation

```
$ git clone git@github.com:jasonswett/home-library-seed.git
$ bundle install
$ rails db:setup
$ cd client
$ npm install
```

## Running the project

Rails server:

```
$ rails server --binding 0.0.0.0
```

Angular server:

```
$ cd client
$ npm start
```

Visit `http://localhost:4200/` in the browser.

## Running the tests

All tests should be passing.

Rails:

```
$ rspec
```

Angular:

```
$ cd client
$ ng test
```
