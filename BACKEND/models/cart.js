const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  items: { type: Array },
  cartId: { type: String, required: true },
  totalPrice: { type: Number },
});
module.exports = mongoose.model('Cart', CartSchema);
