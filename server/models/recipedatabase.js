const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:0.0.0.0/myrecipies");

// models
require("./firstModel");
require("./secondModel");
