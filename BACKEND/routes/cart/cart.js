const express = require('express');
const cartControllers = require('../../controllers/cart');
const router = express.Router();

router.put('/:userId/delete', cartControllers.deleteItemById);
router.put('/:userId/decrese', cartControllers.decreseItemByOne);
router.put('/:userId/increse', cartControllers.increseItemByOne);
router.put('/:userId', cartControllers.addItemToCart);
router.get('/:userId', cartControllers.getCartByUserId);

module.exports = router;
