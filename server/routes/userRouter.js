const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController');
const asyncMiddleware = require('../utils/asyncMiddleware');


/**
 * Create new user in the database
 * @param: request
 * @param: response
 * @param: next
 */
router.post('/', asyncMiddleware(async (req, res, next) => {
    const result = await Controller.createUser(req.body);  
    res.json(result);
}));

module.exports = router;