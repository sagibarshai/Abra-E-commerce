const CartSchema = require('../models/cart');
const addItemToCart = async (req, res, next) => {
  const { userId, productObj } = req.body;
  const carts = await CartSchema.find();
  let cartItems = [];
  for (let cart of carts) {
    if (cart.cartId === userId) {
      let totalCartPrice = cart.totalPrice;
      cartItems = [...cart.items];
      const exitingItem = cartItems.find(
        (item) => item.name === productObj.name
      );
      if (exitingItem) {
        exitingItem.cartQty++;
        totalCartPrice += exitingItem.price;
      } else {
        productObj.cartQty = 1;
        totalCartPrice += productObj.price;

        cartItems.push(productObj);
      }
      const { items, totalPrice } = cart;
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: totalCartPrice } }
      );
    }
  }
  await CartSchema.updateOne(
    { cartId: userId },
    { $set: { items: cartItems } }
  );

  res.json({ message: productObj });
};

const getCartByUserId = async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId);
  res.json({ userId: userId });
};
exports.addItemToCart = addItemToCart;
exports.getCartByUserId = getCartByUserId;
