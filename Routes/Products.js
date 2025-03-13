const {
    AddProducts,
    upload,
    GetAllProducts,
    UpdateproductImage,
    UpdateQuantity,
    UpdateQuantitySales,
    GetProductBranch ,
    DeleteRecord ,
    GetAllProductsByPage,
    SearchProducts
} = require("../Controller/Product")
const express = require("express")

const router = express.Router()

router.post('/products',upload.single('image'), AddProducts)

router.get("/products", GetAllProducts)

router.get("/productsPage",  GetAllProductsByPage)

router.get("/productsBranch/:Name",     GetProductBranch,
)
router.get('/Prosearch/:search', SearchProducts);

router.put("/productsimg",upload.single('image'), UpdateproductImage)

router.put("/productsQty", UpdateQuantity)

router.put("/productsQtySales", UpdateQuantitySales)




// router.put("/machine/:Id",UpdateMachine)



router.delete("/products/:id",DeleteRecord)





module.exports = router