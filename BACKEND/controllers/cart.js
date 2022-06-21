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
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: cartItems } }
      );
      res.json({ cartItems: cartItems, totalPrice: totalCartPrice });
    }
  }
};

const getCartByUserId = async (req, res, next) => {
  const { userId } = req.params;
  const carts = await CartSchema.find();
  for (let cart of carts) {
    if (cart.cartId === userId) {
      const { items, totalPrice } = cart;
      return res.json({ items, items, totalPrice: totalPrice });
    }
  }
  return res.json({ messageError: 'Not found' });
};

const increseItemByOne = async (req, res, next) => {
  const { userId } = req.params;
  const { itemName } = req.body;
  const carts = await CartSchema.find();
  let exitingCart;
  for (let cart of carts) {
    if (cart.cartId === userId) exitingCart = cart;
  }
  const { items, cartId } = exitingCart;
  const exitingItem = items.find((item) => item.name === itemName);
  if (exitingItem) {
    const { cartQty } = exitingItem;
    const updatedQty = cartQty + 1;
    console.log(cartQty, updatedQty);
    console.log(userId === cartId);
    let result;
    try {
      result = await CartSchema.updateOne(
        { cartId: userId },
        { $set: { cartQty: updatedQty } }
      );
    } catch (err) {
      console.log(err);
    }
    return res.json({ message: result });
  }
};
const decreseItemByOne = (req, res, next) => {
  const { id } = req.params;
};
const deleteItemById = (req, res, next) => {
  const { id } = req.params;
};

exports.increseItemByOne = increseItemByOne;
exports.addItemToCart = addItemToCart;
exports.getCartByUserId = getCartByUserId;
