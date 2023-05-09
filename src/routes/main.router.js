const router = require('express').Router();
const renderTemplate = require('../lib/redndertemplate');

const Hero = require('../view/components/Hero');
const Number = require('../view/components/Number');
const Year = require('../view/components/Year');
const Date = require('../view/components/Date');
const Mathematical = require('../view/components/Mathematical');

router.get('/', (req, res) => {
  const { user } = req.session;
  renderTemplate(Hero, { user }, res);
});

router.get('/number', (req, res) => {
  const { user } = req.session;
  renderTemplate(Number, { user }, res);
});
router.get('/date', (req, res) => {
  const { user } = req.session;
  renderTemplate(Date, { user }, res);
});

router.get('/year', (req, res) => {
  const { user } = req.session;
  renderTemplate(Year, { user }, res);
});

router.get('/mathematical', (req, res) => {
  const { user } = req.session;
  renderTemplate(Mathematical, { user }, res);
});

router.post('/get-info', (req, res) => {
  console.log(req.body);
  const { number } = req.body;
  console.log(number);
});

module.exports = router;
