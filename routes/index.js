let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let contactlist = require('../models/contactlist');
const { response } = require('express');


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

//Add contact
router.get('/addcontact', function(req, res, next) {
    res.render('addcontact', { title: 'add contact' });
});


//Add contact
router.post('/addcontact', (req, res, next) => {

    //instantiate a new obkect of type contactlist
    let contactlist = contactlist.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    contactlist.Model.create(contactlist, (err, contactlist) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });

    console.log(contactlist);

    res.redirect('/contactlist');

});












module.exports = router;