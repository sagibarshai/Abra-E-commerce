const CartSchema = require('../models/cart');
const addItemToCart = async (req, res, next) => {
  const { userId, itemsInCart, cartTotalPrice } = req.body;
  const carts = await CartSchema.find();
  let priceResult;
  let itemsResult;
  let exititngCart = carts.find((cart) => cart.cartId === userId);
  if (exititngCart) {
    const { items, totalPrice } = exititngCart;
    try {
      priceResult = await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: cartTotalPrice } }
      );
      itemsResult = await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: itemsInCart } }
      );
      return res.json({ message: 'updated' });
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.json({ errorMessage: 'not found' });
  }
};

const getCartByUserId = async (req, res, next) => {
  const { userId } = req.params;
  const carts = await CartSchema.find();
  for (let cart of carts) {
    if (cart.cartId === userId) {
      const { items } = cart;
      let totalPrice = 0;
      for (let item of cart.items) {
        totalPrice += item.cartQty * item.price;
      }

      return res.json({ items, totalPrice });
    }
  }
  return res.json({ messageError: 'Not found' });
};

const increseItemByOne = async (req, res, next) => {
  const { userId } = req.params;
  const { updatedTotalPrice, itemsInCart } = req.body;
  const carts = await CartSchema.find();
  const exititngCart = carts.find((cart) => cart.cartId === userId);
  if (exititngCart) {
    try {
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: updatedTotalPrice } }
      );
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: itemsInCart } }
      );
      return res.json({ message: 'updated' });
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.json({ errorMessage: 'not found' });
  }
};

const decreseItemByOne = async (req, res, next) => {
  const { userId } = req.params;
  const { totalCartPrice, itemsInCart } = req.body;
  const carts = await CartSchema.find();
  const exititngCart = carts.find((cart) => cart.cartId === userId);
  if (exititngCart) {
    const priceResult = await CartSchema.updateOne(
      { cartId: userId },
      { $set: { totalPrice: totalCartPrice } }
    );
    const itemResult = await CartSchema.updateOne(
      { cartId: userId },
      { $set: { items: itemsInCart } }
    );
    return res.json({ itemResult, priceResult });
  } else {
    return res.json({ errorMessage: 'Not found' });
  }
};

const deleteItemById = async (req, res, next) => {
  const { userId } = req.params;
  const { productObj } = req.body;
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
        cartItems = cartItems.filter((item) => item !== exitingItem);

        totalCartPrice =
          totalCartPrice - exitingItem.price * exitingItem.cartQty;
        exitingItem.cartQty = 0;
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
      return res.json({ cartItems: cartItems, totalPrice: totalCartPrice });
    }
  }
};

exports.addItemToCart = addItemToCart;
exports.getCartByUserId = getCartByUserId;
exports.deleteItemById = deleteItemById;
exports.increseItemByOne = increseItemByOne;
exports.decreseItemByOne = decreseItemByOne;
