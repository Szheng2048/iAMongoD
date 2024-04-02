const express = require("express")
const { createProduct,getAllProducts,getProductByID,updateProductByID } = require("./controller/productController")
const router = express.Router()

router.get("/create-product",async(req,res)=>{
    try {
        let savedProduct = await createProduct(req.body)
        res.json({message:"successfully added product",savedProduct})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
})
router.get("/get-all-product",async(req,res)=>{
    try {
        let allProducts = await getAllProducts()
        res.json({message:"products",allProducts})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
})
router.get("/get-product-by-id/:id",async(req,res)=>{
    try {
        let targetProduct = await getProductByID(req.params.id)
        res.json({message:"target product pulled",targetProduct})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
})
router.post("/update-product-by-id/:id",async(req,res)=>{
    try {
        let updatedProduct = await updateProductByID(req.params.id,req.body)
        res.json({message:"updated Product",updatedProduct})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
})





module.exports = router