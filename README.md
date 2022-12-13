# Acebook - Owlpaca Team

## Overview

Acebook is a Facebook-clone developed whilst on the Makers Academy Bootcamp September 2022 cohort.

- A (full stack) web app that allows users to login to the social media platform.
- Users can interact with other users and profiles by the feed through posts, comments and likes.
- Built using Test Driven Development and working cohesively as a team.

## Group Collaborators 

- [Ben](https://github.com/eggs-benny)
- [Chris](https://github.com/AUTOMCAS)
- [Miles](https://github.com/Cragg87)
- [Patricia](https://github.com/PatriciaGN)
- [Joe](https://github.com/JoeOsborne77)
- [Hibaq](https://github.com/HibaqObsiye)

## User Stories:

Using TDD, we implemented the following user stories:

As a user,  
So I can use Acebook,  
I'd like to be able to register an account.

As a user,  
For a personalised experience,  
I'd like to be able to log into Acebook.

As a user,  
So that nobody posts on my behalf,  
I'd like to be able to log out of Acebook.

As a user,  
So that I can say what's on my mind,  
I'd like to be able to make a post on the timeline.

As a user,  
So I can see what other people have to say,  
I'd like to be able to view other users' posts on the timeline.

As a user,  
So I know who said what,  
I'd like to see who posted each post.

As a user,  
So I am keeping up with the latest news,  
I'd like to see the time and date when others have posted.

As a user,  
So I see the latest news first,  
I'd like to see the newest posts first.

As a user,  
So I can express my appreciation for a post,  
I'd like to be able to like and dislike a post.

As a user,  
So I can engage with a post,  
I'd like to be able to comment on posts.

## Technologies:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Card wall (Trello Planning)

![Trello Screenshot](./public/images/Trello_screenshot.png)

(https://trello.com/b/2KwANtg2/owlpacas-tonalist)

## ScreenShots (app)

# Setup

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   _Note:_ If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

### Test

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips that may resolve such issues:

- Check that MongoDB is installed using: `mongo --version`
- Check that it's running using: `brew services list`
