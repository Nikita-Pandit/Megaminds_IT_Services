const {addProduct,getProductDetails,editController,deleteController,getUpdatedProductDetails}=require("../controllers/productController")
const express=require("express")
const router=express.Router()
const multer=require("multer")
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})
const upload = multer({ storage: storage})


router.post("/addProduct",upload.single('image'),addProduct)
router.get("/getProductDetails",getProductDetails)
router.post("/editProduct",upload.single('image'),editController)
router.post("/deleteProduct",deleteController)
router.get("/product/:stockCode",getUpdatedProductDetails)
module.exports=router