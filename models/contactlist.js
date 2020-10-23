let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; //alias

let contactlistModel = new Schema({
    name: String,
    number: String,
    email: String
}, {
    collection: 'contactlist'
})

module.exports.Model = Model('contactlist', contactlistModel);