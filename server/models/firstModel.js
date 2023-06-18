const mongoose = require("mongoose")

const firstSchema = new mongoose.Schema({
    name:{
        type:String,
        required:"This is required field"
    },
    image:{
        type:String
    }
});
module.exports=mongoose.model("firstModel",firstSchema);