const { text } = require("express");
const mongoose = require("mongoose");
const firstmod=require("./firstModel")
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:"This is required field"
    },
    image:{
        type:String
    }
});

schema.index({name:'text'});
// if want to search in name and discription
// schema.index({name:'text', discription:'text'});

// Wild CardIndexing
// schema.index({"$**":"texts"});


module.exports=mongoose.model("secondModel",schema);