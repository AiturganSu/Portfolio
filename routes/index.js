let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//About Page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

// Products Page
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

//Services Page
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

//Contact page
router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
