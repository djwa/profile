var express = require("express");
var mongoose = require('mongoose');
var cors = require("cors");

mongoose.connect('mongodb://localhost/felony');

var fellasSchema = {
    name: String,
    surname: String,
    company: String,
    email: String,
    phone: String
};

var Fella = mongoose.model('Fella', fellasSchema, 'fellas');

var app = express();
app.use(cors());

app.get('/fellas', function (req, res) {
    Fella.find(function (err, doc) {
        res.send(doc);
    });
});
app.listen(3000);