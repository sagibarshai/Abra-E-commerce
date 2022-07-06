const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
  items: { type: Array },
});
module.exports = mongoose.model('Products', ProductsSchema);
