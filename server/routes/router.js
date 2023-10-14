const express= require("express");
const router= new express.Router();
const Products = require("../models/productsSchema")
//get productdata api
router.get("/getproducts",async(req,res)=>{
    try{
        const productsdata = await Products.find();
        // console.log("console the data"+productsdata);
        res.status(201).json(productsdata);
    }catch(error){
        console.log("error"+error.message);
    }
});
// get invidual data
router.get("/getproductssone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const individual = await Product.findOne({ id: id });
        console.log('Individual product found:', individual);

        res.status(200).json(individual);
    } catch (error) {
        console.error('Error fetching individual product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports= router;
