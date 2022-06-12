var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Home', {
    title: 'Home',
    userName: 'Vimal Jose Mathew'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('Aboutme', { title: 'About', userName: 'Vimal Jose Mathew' });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('Projects', { title: 'Projects', userName: 'Vimal Jose Mathew' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('Services', { title: 'Services', userName: 'Vimal Jose Mathew' });
});

/* GET Contacts me  page. */
router.get('/contacts', function (req, res, next) {
  res.render('Contactme', { title: 'Contacts', userName: 'Vimal Jose Mathew' });
});




module.exports = router;
