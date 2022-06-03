const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const peopleRouter = require('./routes/people');
const animalRouter = require('./routes/animals')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Insert the router
app.use('/people', peopleRouter);
app.use('/animals', animalRouter)

module.exports = app;
