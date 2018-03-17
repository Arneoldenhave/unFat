const express    = require('express');
const userSchema = require('../schemas/user');
const Result     = require('../utils/result'); 
//werk deze promise?
const Promise    = require('bluebird');

//Create a new user;
module.exports.createUser = async function(json) {

    return new Promise(function(resolve, reject){
        userSchema.save(json).then(function(user){
            resolve(user);
        }).catch(function(error){
            reject(error);
        });
    });
};