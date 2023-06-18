require("../models/recipedatabase");
const firstModel = require("../models/firstModel");
const secondModel = require("../models/secondModel")
const path = require("path");

// homepage
exports.homepage =  async(req,res)=>{
    try {
        const show = await firstModel.find({})
        res.render("index", { show } )
    } catch (error) {
        console.log("There is some error")
    }
}


// catagories page
exports.catagories=async(req,res)=>{
    try {
        const show2 = await secondModel.find({})
        res.render("catagories",{show2})
    } catch (error) {
        console.log("There is some eror")
    }
}


// recipe page
    exports.recipe=  async(req,res)=>{

        try {
            const recipeId=req.params.id;
            const show3 = await secondModel.findById(recipeId);
            res.render("recipe", { show3 } )
        } catch (error) {
            console.log("There is some error")
        }
    }

// searching page
    exports.searching = async(req,res)=>{
        try {
            let searchTerm = req.body.searchTerm;
            let recipe = await secondModel.find({$text:{$search:searchTerm, $diacriticSensitive: true }});
            res.render("search",{recipe});
        } catch (error) {
            console.log("something error in search try and catch")
        }
    }

//submitRecipe
    exports.submitRecipe = async(req,res)=>{
        try {
            res.render("submit-recipe");
        } catch (error) {
            console.log("something error in submitRecipe try and catch")
        }
    }

// submitRecipeOnPost
    exports.submitRecipeOnPost = async(req,res)=>{
        try {

            const putt = await new secondModel({
                name : req.body.namer,
                image : req.body.imagei
            });
            await putt.save()
            
            res.render("submit-recipe");
            
        } catch (error) {
            console.log("some error in putting data"+ error)
            
        }
    }


    function deleting() {
        const finding = secondModel.deleteOne({name:"Karam Khan"})
        
    }
deleting();














// function used in homepage

// function someDummydata(khan,iim) {
//     firstModel.insertMany({
//         name:khan,
//         image:iim
//     })
    
// };

// someDummydata("Pakistani","pakistani-food.jpg");
// someDummydata("Turkish","turkey-food.jpg");
// someDummydata("American","American-food.jpgg");
// someDummydata("Spanish","spanish-food.jpg");





// function used in catagories

// function someDummydata(khan,iim) {
//     secondModel.insertMany({
//         name:khan,
//         image:iim
//     })
    
// };

// someDummydata("Pakistani","pakistani-food.jpg");
// someDummydata("Turkish","turkey-food.jpg");
// someDummydata("American","American-food.jpgg");
// someDummydata("Spanish","spanish-food.jpg");
// someDummydata("Chinese","body-background.jpg");
// someDummydata("Afghani","dumpukht.jpg");
// someDummydata("Karachi","karachi_halwa.webp");
// someDummydata("Rawalpindi","hero-img.jpg");
// someDummydata("Arabic","American-food.jpg");
// someDummydata("Vegitarian","turkey-food.jpg");
// someDummydata("Fruits","peshwri_naan.jpg");
// someDummydata("Fruits","peshwri_naan.jpg");
// someDummydata("Peshawari","dumpukht.jpg");