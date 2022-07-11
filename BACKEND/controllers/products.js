const ProductsSchema = require("../models/products");

const getProducts = async (req, res, next) => {
  let items;
  try {
    items = await ProductsSchema.find();
  } catch (err) {
    console.log(err);
    return res.json({ message: "cannot get" });
  }

  return res.json(items);
};

const editProuct = async (req, res, next) => {
  const data = req.body.formData;
  const allProductsArray = await ProductsSchema.find()
  const exsistingProducts = allProductsArray[0]
  const exsistingItems = exsistingProducts.items
  let newItems = []
  for(let item of exsistingItems) {
    if(item.imgSrc === data.imgSrc) {
        let newItem = {
            ...item,
             cartQty : Number(data.quantity),
             name:data.name,
             price:Number(data.price),
             types:data.types
        }
        newItems.push(newItem)
    }
    else newItems.push(item)
  }
  const newProductsObj = {
    ...exsistingProducts, items:newItems
  }
  const deleteResult = await ProductsSchema.findOneAndRemove({items:exsistingItems})
   const newProducts = new ProductsSchema(newProductsObj)
  const insertResult = await newProducts.save()
  return res.json(data);
};

const deleteProduct = async (req , res , next) => {
  const data = req.body;
  const allProductsArray = await ProductsSchema.find()
  const exsistingProducts = allProductsArray[0]
  const exsistingItems = exsistingProducts.items
  let newItems = []
  for(let item of exsistingItems) {
    if(item.imgSrc === data.imgSrc) continue
    else newItems.push(item)
  }
  const newProductsObj = {
    ...exsistingProducts, items:newItems
  }
  await ProductsSchema.findOneAndRemove({items:exsistingItems})
   const newProducts = new ProductsSchema(newProductsObj)
   await newProducts.save()
  return res.json(data);
}


const addProduct = async (req , res , next) => {
  const data = req.body;
  let newItem = {
     cartQty : Number(data.quantity),
     name:data.name,
     price:Number(data.price),
     imgSrc:data.imgSrc,
     types:data.types
}
  const allProductsArray = await ProductsSchema.find()
  const exsistingProducts = allProductsArray[0]
  const exsistingItems = exsistingProducts.items
  const newItems = [...exsistingItems , newItem]
  const newProductsObj = {
    ...exsistingProducts, items:newItems
  }
  await ProductsSchema.findOneAndRemove({items:exsistingItems})
   const newProducts = new ProductsSchema(newProductsObj)
   const result = await newProducts.save()
  return res.json(newItem);
}

exports.addProduct = addProduct
exports.deleteProduct = deleteProduct
exports.getProducts = getProducts;
exports.editProuct = editProuct;
