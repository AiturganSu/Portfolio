let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let contactlist = require('../models/contactlist');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//About Page
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

// Projects Page
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Products' });
});

//Services Page
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

//Contact page
router.get('/contacts', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

//Resume page
router.get('/resume', function(req, res, next) {
    res.render('resume', { title: 'resume' });
});





module.exports = router;