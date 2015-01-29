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

app.post('/fellas', function (req, res) {
    Fella.create(req.body, function (err, post) {
        if (err)
            return next(err);
        Fella.find(function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    });
});

app.delete('/fellas/:fella_id', function (req, res) {
    Fella.remove({_id: req.params.fella_id}, function (err, post) {
        if (err)
            return next(err);
        Fella.find(function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    });
});

app.listen(3000);