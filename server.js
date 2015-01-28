var express = require("express");
var mongoose = require('mongoose');
var cors = require("cors");
var bodyParser = require('body-parser');

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
app.use(bodyParser.json());
app.use(cors());

app.get('/fellas', function (req, res) {
    Fella.find(function (err, doc) {
        res.send(doc);
    });
});
//app.post('/fellas', function (req, res) {
////        res.send(req.body);
//        
//        data.push(req.body);
//        res.send(data);
//});


app.post('/fellas', function (req, res) {
    var Fella;
    console.log("POST: ");
    console.log(req.body);
    Fella = new FellaModel({
        name: req.body.name,
        surname: req.body.surname,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone
    });
    Fella.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(fella);
});
app.listen(3000);