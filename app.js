require('@babel/register');
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const checkConnect = require('./src/middlewares/dbConnectCheck');
const renderTemplate = require('./src/lib/redndertemplate');
const mainRouter = require('./src/routes/main.router');
const registrationRouter = require('./src/routes/registration.route');

const app = express();

// * Конфиг для куки в виде файла сессий
const sessionConfig = {
  name: 'numbers',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // * время жизни в мс (ms) - 1 день
    httpOnly: false,
  },
};
// * Подключи сессии как мидлу
app.use(session(sessionConfig));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

const PORT = process.env.PORT || 3000;

app.use('/', mainRouter);
app.use('/', registrationRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен! ${PORT}`);
});
