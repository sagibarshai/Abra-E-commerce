const productsController = require('../../controllers/products')
const express = require('express')
const router = express.Router()
router.get('/products' , productsController.getProducts)
router.put('/manager/add-product' , productsController.addProuct)

module.exports = router