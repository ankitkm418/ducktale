var mongoose = require('mongoose');

var data = new mongoose.Schema({
title : String,
firstName: String,
lastName: String,
class: String,
subject: String,
marks: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', data);