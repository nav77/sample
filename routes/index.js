var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Home', {
    title: 'Home',
    userName: 'Navya'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('Aboutme', { title: 'About', userName: 'Navya' });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('Projects', { title: 'Projects', userName: 'Navya' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('Services', { title: 'Services', userName: 'Navya' });
});

/* GET Contacts me  page. */
router.get('/contacts', function (req, res, next) {
  res.render('Contactme', { title: 'Contacts', userName: 'Navya' });
});




module.exports = router;
