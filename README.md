# HomeLibrary Seed Project

This repository is the starting point for much of the work in the book [Angular for Rails Developers](https://www.angularonrails.com/angular-rails-developers/).

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
