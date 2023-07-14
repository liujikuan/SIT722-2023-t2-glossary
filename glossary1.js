var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    const data = [
        ['ID', 'Term', 'Description', 'References'],
        ['1', 'Header 2', 'Header 2', 'Header 2'],
        ['2', 'Header 2', 'Header 2', 'Header 2'],
        ['3', 'Header 2', 'Header 2', 'Header 2'],
        ['4', 'Header 2', 'Header 2', 'Header 2'],
        ['5', 'Header 2', 'Header 2', 'Header 2'],
        ['6', 'Header 2', 'Header 2', 'Header 2'],
        ['7', 'Header 2', 'Header 2', 'Header 2'],
        ['8', 'Header 2', 'Header 2', 'Header 2'],
        ['9', 'Header 2', 'Header 2', 'Header 2'],
        ['10', 'Header 2', 'Header 2', 'Header 2']
    ];

    res.render('index', { data });
});

module.exports = router;