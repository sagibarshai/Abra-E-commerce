const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  items: { type: Array },
  cartId: { type: String, required: true },
  totalPrice: {},
});
module.exports = mongoose.model('Cart', CartSchema);
