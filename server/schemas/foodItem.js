const express = require('express');
const mongoose = require('mongoose');


let foodItemSchema = new mongoose.Schema({

    name           :    {type : String, required : true, unique : true},
    healthy        :    {type : Number, min : 0, max : 5, required: true},
    time           :    [{type : Number}, {type : Number, default : 1}],
    quantity       :    [{type: Number, default : 6}, {type: Number, default : 1}],
    weight         :    [{type: Number}, {type: String, default : "gr"}, {type: Number, default : 1}],
    day: {
        mon         : {type : Number, default : 0},
        tue         : {type : Number, default : 0},
        wed         : {type : Number, default : 0},
        thu         : {type : Number, default : 0},
        fri         : {type : Number, default : 0},
        sat         : {type : Number, default : 0},
        sun         : {type : Number, default : 0}
    },
    tag: {
        breakfast   : {type : Number, default : 0},
        lunch       : {type : Number, default : 0},
        dinner      : {type : Number, default : 0},
        snack       : {type : Number, default : 0}
    }
});

// module.exports.foodItemConstructor = function foodItemConstructor (json){
//     this.name = json.name,
//     this.healthy = json.healthy,
//     this.time = {json.time[0] json.time[1]},
//     this.quantity = json.time
 
// }

module.exports.save = function(json) {
    return mongoose.connection.collection('foodItems').save()
    
}


// module.exports.save = function(json) {
//     return new Promise(json, (reject, resolve) => {
//         console.log("Arrived @ foodItem");
//         mongoose.connection.collection('foodItems').save(json).then(function(error, result){
//             result ? resolve (result) : reject(error);
//         });
//     });
// }



module.exports.FoodItem = mongoose.model('FoodItem', foodItemSchema);