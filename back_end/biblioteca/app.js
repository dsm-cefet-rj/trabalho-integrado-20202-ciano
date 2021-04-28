var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');

const URL = config.mongoUrl;
const mongoose = require('mongoose');

var usuariosRouter = require('./routes/usuarios');
var livrosRouter = require('./routes/livros');
var emprestimosRouter = require('./routes/emprestimos');
var usersRouter = require('./routes/users');

const { start } = require('repl');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/usuarios', usuariosRouter);
app.use('/livros', livrosRouter);
app.use('/emprestimos', emprestimosRouter);
app.use('/users', usersRouter);

// Creating database
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // If the connection was sucessful
    console.log('DB connected com sucesso')
});

module.exports = app;
