const express = require('express');
const FoodSchema = require('../schemas/foodItem');


/**
 * @param {*} json 
 */
module.exports.foodItemConstructor = async function(json){
    console.log("Arrived in foodService @ foodItemConstructor");

    try {

        async function Item(json){
            this.name = json.name,
            this.quantity = json.quantity
        }
        let item  = await new Ttem(json);


        console.log(item);
        return item;
    
    } catch(error) {
        console.log(error); 
    }
           
};  

