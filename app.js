const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }))

app.use(express.static("./public"));
app.set("view engine", "ejs");

const recipeRouter = require("./server/routes/recipeRoute")
app.use("/", recipeRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})