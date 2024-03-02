const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0/myrecipies");

// models
require("./firstModel");
require("./secondModel");
