const ProductsSchema = require('../models/products')
const getProducts = async (req , res , next) => {
    let items ;
try {
     items = await ProductsSchema.find()
   
} catch(err) {
    console.log(err)
    return res.json({message:'cannot get'})
}

return res.json(items)
}
const addProuct = (req , res , next) => {
    const data = req.body
    return res.json(data)
}

exports.getProducts = getProducts
exports.addProuct = addProuct