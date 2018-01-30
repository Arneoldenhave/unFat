const express = require('express');
const Controller = require('./../controllers/foodController');
const bodyParser = require('body-parser');
const router = express.Router();


router.post('/', (req, res, next) => {
    console.log("Arrived @ foodRouter/POST");
    console.log(req.body);
    Controller.createFoodItem(req.body, function(statusCode, result){
        res.status(statusCode).send(result);
    });
});


module.exports = router;