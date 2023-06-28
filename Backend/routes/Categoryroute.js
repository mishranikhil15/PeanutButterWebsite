const express = require("express");
const { Categorymodel } = require("../models/CategoryModel");
const categoryRouter = express.Router();

const { authenticate } = require("../middlewares/authentication");

const { authorise } = require("../middlewares/authorization");


categoryRouter.get("/", async (req, res) => {

    try {
        const find_product = await Productmodel.find();

        res.json({ "msg": find_product })
    } catch (error) {
        console.log(error);
        res.json({ "msg": "Error while Getting the Product" })
    }

})








categoryRouter.get("/filter",async(req,res)=>{
    const query=req.query.value
    
    let store=query.toLowerCase();

    try {
        let filt_data=await Productmodel.find({sizes:store});
        res.json({"msg":filt_data})
        
    } catch (error) {
        console.log(error);
        res.json({"msg":"Error while filtering the data"})
    }


})


categoryRouter.get("/sort",async(req,res)=>{
    const query=req.query.value
    
    try {
        if(query=="asc"){
            let sort_data=await Productmodel.find().sort({price:1})
            res.json({"msg":sort_data})
        }else if(query=="desc"){
            let sort_data=await Cartmodel.find().sort({price:-1})
            res.json({"msg":sort_data})
        }
        
    } catch (error) {
        console.log(error);
        res.json({"msg":"Error while filtering the data"})
    }
})


categoryRouter.get("/search",async(req,res)=>{
    const query=req.query.value
    console.log(query);
    try {
        let store=query.toLowerCase();
        let search_data=await Productmodel.find({name:query});
        res.json({"msg":search_data});  
    } catch (error) {
        console.log(error);
        res.json({"msg":"Error while filtering the data"})
    }
})

module.exports = {
    categoryRouter
}

// {
//     "image":"https://via.placeholder.com/350x250",
//     "name":"HoneyButter",
//     "rating":4.5,
//     "price":100,
//     "type":"popular",
//     "brand":"rosy",
//     "flavors":"HoneyLike",
//     "sizes":"small"
    
    
//   }
  