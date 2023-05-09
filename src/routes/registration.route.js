const router = require('express').Router();
const renderTemplate = require('../lib/redndertemplate');
const bcrypt = require('bcrypt');

const UserService = require('../lib/userservice');

const Registration = require('../view/auth/Registration');
const Login = require('../view/auth/Login');

router.get('/register', (req, res) => {
  renderTemplate(Registration, {}, res, req);
});

router.get('/login', (req, res) => {
  renderTemplate(Login, {}, res, req);
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await UserService.registerUser(username, email, password);
    res.redirect('login');
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.loginUser(email, password);
    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.json({ msg: error.message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.clearCookie('numbers');
      res.redirect('/');
    }
  });
});

module.exports = router;
