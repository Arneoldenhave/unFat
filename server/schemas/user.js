const express = require('express');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
//Werkt de bluebird Promise?
const Promise    = require('bluebird');

/** 
* Create a new user in database
*   @param: userId
*   @param: name
*   @param: surname
*   @param: networks
*   @param: devices
*/
let userModel = new mongoose.Schema({

    userId      :     { type: String,
                        required: true,
                        unique: true    },

    name        :     { type: String, 
                        required: true  },

    surname     :     { type: String,
                        required: true  },
    
    networks    :   [ { type: Array,
                        name       :  { type: String },
                        password   :  { type: String }, }],

    devices     :   [ { type: Array,
                        name       :  { type: String },
                        deviceId   :  { type: String },
                        created    :  { type: String }  }],
});


let User = mongoose.model('Users', userModel);

/**
 * Save a new user into database
 * @param json
 */
module.exports.save = function(json){
    return new Promise(function(resolve, reject){
        let user        = new User(json);
            user.userId = uuidv4();
        user.save().then(function(result) {
            resolve(result);
        }).catch(function(error){
            reject(error);
        });  
    })
}