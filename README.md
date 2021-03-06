# ﻿Questioner

Questioner is a full stack application for crowd-sourcing questions for a meetup. ​It helps the meetup organizer prioritize  questions to be answered. Other users can vote on asked questions and they bubble to the top  or bottom of the log.

[![Maintainability](https://api.codeclimate.com/v1/badges/44d33e84bea8951b1f81/maintainability)](https://codeclimate.com/github/TheDrizzyWay/Questioner/maintainability) [![Build Status](https://travis-ci.org/TheDrizzyWay/Questioner.svg?branch=develop)](https://travis-ci.org/TheDrizzyWay/Questioner) [![Coverage Status](https://coveralls.io/repos/github/TheDrizzyWay/Questioner/badge.svg?branch=develop)](https://coveralls.io/github/TheDrizzyWay/Questioner?branch=develop) [![License:   MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questioner API

The application's front-end is hosted on gh-pages [here](https://thedrizzyway.github.io/Questioner/UI)

Version 1 (v1) of the Questioner API is hosted on Heroku at: [https://drizzyquestioner.herokuapp.com/api/v1](https://drizzyquestioner.herokuapp.com/api/v1/) and has the following endpoints:

### Meetup Endpoints

| Endpoint                     | Request Method | Parameters  | Action                                |
| -----------------------------|:--------------:| :----------:| :------------------------------------:|
| /api/v1/meetups              | POST           |             | Allows an admin to create meetups     |
| /api/v1/meetups              | GET            |             | Allows an admin get all meetups       |
| /api/v1/meetups/upcoming     | GET            |             | Allows a user get all upcoming meetups|
| /api/v1/meetups/:id          | GET            |  meetup id  | Allows a user get a single meetup     |
| /api/v1/meetups/:id/rsvps    | POST           |  meetup id  | Allows a user respond to a meetup     | |                

### Question Endpoints

| Endpoint                        | Request Method | Parameters  | Action                                |
| --------------------------------| :------------: |:-----------:| :-----------------------------------: |
| /api/v1/questions               | POST           |             | Allows a user create a question       |
| /api/v1/questions               | GET            |             | Allows a user get all questions       |
| /api/v1/questions/:id           | GET            | question id | Allows a user get a single question   |
| /api/v1/questions/:id/upvote    | PATCH          | question id | Allows a user upvote a question       |
| /api/v1/questions/:id/downvote  | PATCH          | question id | Allows a user downvote a question     |       

***
### Tools

> Frontend (UI)
> - HTML for webpage layout
> - CSS for styling
> - Javascript for dynamic behaviour

> Backend (api)
> - Node js for server-side logic
> - Express for routing
> - Babel for transpiling source code

> Test Driven Development (TDD)
> - Mocha and Chai for testing api routes
> - Chai-http for simulating http calls

> Continuous Integration
> - Travis CI for automated testing
> - Codeclimate for code quality report
> - Coveralls for test coverage

***

## Installation
1. Install [**Node JS**](https://nodejs.org/en/).
2. Clone this repository [**here**](https://github.com/TheDrizzyWay/Questioner.git)
3. [**cd**] into the root of the **project directory**.
4. Run `npm install` on the terminal to install Dependencies

### Project Management
This project is managed with Pivotal Tracker and can be found [here](https://www.pivotaltracker.com/n/projects/2232521)
