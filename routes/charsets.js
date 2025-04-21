var express = require('express');
var router = express.Router();
const  charsetscontroller  = require('../controllers/charsetscontroller')


router.get('/', function(req, res, next) {
    charsetscontroller.index(req,res);
});



module.exports = router;
