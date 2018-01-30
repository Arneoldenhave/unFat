const express = require('express');
const foodService = require('../services/foodService');
const async = require('async');
const FoodItem = require('../schemas/foodItem');







module.exports.createFoodItem = function(json, callback){

    async function create(json) {
        try {
            let item = await FoodItem.FoodItem(json);
            return item;
        } catch(error){
            console.log(error);
            return (error);
        }
    }
    create(json).then(function(result){
        console.log(result);
        callback(200, {"data":result});
    }).catch(function(error){
        console.log(error);
        callback(500, {"Error":"Internal server error"});
    })
}


/**
 * Add a foodItem to database
 * @param {*} json 
 * @param {*} callback 
 */
module.exports.constructFoodItem = function(json, callback) {
    
        async function result(json) {
            console.log("result called");
            return await new item(json);
        }
        function item (json){
            try {
            console.log("item called")
            this.name = json.nane
            

            } catch(error){
                console.log(error);
            }
        
        }
        console.log("first");

        result(json).then(function(lala){
            console.log(lala)
            callback(200, {"data":lala})
        }).catch(function(error) {
            console.log(error)
            callback(500, {"Error":"Internal server error"});
        })

};


