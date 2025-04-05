const productModel=require("../models/productModel")
const addProduct=async (req,res)=>{
  console.log("product addes")
  const {stockCode,name,stock,description,price,category,quantity}=req.body
console.log("Request body",req.body)
try{
console.log("Request body1",req.body)
  let image_filename = `${req.file.filename}`
//  let image_filename = `/uploads/${req.file.filename}`
console.log("image_filename",image_filename)
    const product=new productModel({
      stockCode,
      name,
      stock,
      description,
      price,
      category,
      image: image_filename,
      quantity
    })
    console.log(product)
    await product.save()
    console.log(product)
    return res.status(201).json({
      success: true,
      message: "Product added successfully.",
      product,
    });

}
catch(error){
  res.status(500).json({ success: false, message: error.message || "product not added in the DB." });
}
}

const getProductDetails=async(req,res)=>{
 try{
    const allProductDetails= await productModel.find({})
    console.log(allProductDetails)
    res.status(200).json({success:true,allProductDetails})
 }
catch(error){
    console.error("Error in fetching productDetails from the DB")

}
}


const editController=async(req,res)=>{
    try {
        const {stockCode,name,stock,description,price,category,quantity} = req.body;
        // if (!stockCode || !description || !quantity || !price || !stock || !image_url) {
        //   return res.status(400).json({ message: 'All fields are required.' });
        // }    
          let image_filename =  req.file ? req.file.filename : undefined;
        console.log(req.body);
        const updatedProduct = await productModel.findOneAndUpdate(
          { stockCode }, // Find the product by stockCode
          { name,stock,description,price,category,quantity,
            image:image_filename
          }, // Update fields
          { new: true } // Return the updated document
        );
    
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found.' });
        }
    
        res.status(200).json({
          message: 'Product updated successfully.',
         updatedProduct,
        });
      } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
      }

}


const deleteController=async(req,res)=>{
  console.log("HEllo delete")
    const {stockCode}=req.body;
    console.log("StockCode",stockCode)
    try{
  const deletedProduct= await productModel.findOneAndDelete({stockCode})
  console.log("DeletedProduct",deletedProduct)
  if(!deletedProduct){
return res.status(404).json({success:false,message:"Product not found or already deleted"})
  }
  return res.status(200).json({success:true, message:"product deleted successfully",deletedProduct})
    }
    //Handle Server Error
    catch(error){
        console.error('Error in deleteController:', error.message);
return res.status(500).json({success:false,message:"An error occurred while deleting the product"})
    }
}

const getUpdatedProductDetails=async(req,res)=>{
const {stockCode}=req.params
console.log(stockCode)
const updatedProductFromDB=await productModel.findOne({stockCode})
  console.log("updatedProductFromDB",updatedProductFromDB)
  res.status(200).json({success:true,updatedProductFromDB})
}
module.exports={addProduct,getProductDetails,editController,deleteController,getUpdatedProductDetails}