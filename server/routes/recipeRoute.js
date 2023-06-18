const express = require("express")
const router = express.Router();
const recipeController = require("../controller/recipeController")

router.get("/",recipeController.homepage);
router.get("/catagory",recipeController.catagories);
router.get("/recipe/:id",recipeController.recipe);
router.post("/search",recipeController.searching);
router.get("/submit-recipe",recipeController.submitRecipe);
router.post("/submit-recipe",recipeController.submitRecipeOnPost);

module.exports = router;