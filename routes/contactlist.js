let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let contactlist = require('../models/contactlist');

//Contact-list page READ
router.get('/', function(req, res, next) {

    contactlist.Model.find((err, data) => {
        if (err) {
            console.error(err);
            res.end();
        }


        console.log(data);
        res.render('contactlist', { title: 'contact list', contactlist: data });
    });

});

//Get add page CREATE
router.get('/addcontact', (req, res, next) => {
    res.render('addcontact', { title: 'add contact' });
});
//post process the add page CREATE
router.post('/addcontact', (req, res, next) => {

    let contactlist = contactlist({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    console.log(contactlist);

    res.redirect('/contactlist');

});

//get the edit page UPDATE
router.get('/edit/:id', (req, res, next) => {

});
//post request the edit page UPDATE
router.get('/edit/:id', (req, res, next) => {

});
//get process the delete page DELETE
router.get('/delete/:id', (req, res, next) => {

});


module.exports = router;