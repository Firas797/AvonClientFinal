const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Endpoint to create a new order
router.post('/create-order', async (req, res) => {
  try {
    const { cartItems, userInformation, discountCode, totalAmount } = req.body;

    const newOrder = new Order({
      cartItems,
      userInformation,
      discountCode,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the order.' });
  }
});

// Endpoint to get all orders
router.get('/get-orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching orders.' });
  }
});

module.exports = router;
