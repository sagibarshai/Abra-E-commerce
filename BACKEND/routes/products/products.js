const productsController = require('../../controllers/products')
const express = require('express')
const router = express.Router()
router.get('/products' , productsController.getProducts)
router.put('/manager/delete-product' , productsController.deleteProduct)
router.put('/manager/edit-product' , productsController.editProuct)
router.put('/manager/add-product' , productsController.addProduct)

module.exports = router