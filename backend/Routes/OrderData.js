const express = require('express');
const router = express.Router();
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
     try {
         console.log("Received Order Request:", req.body); // Debug log
 
         let { email, order_data, order_date } = req.body;
         if (!email) {
             console.error("Error: Email is missing in request!");
             return res.status(400).json({ error: "Email is required" });
         }
 
         await order_data.splice(0, 0, { Order_date: order_date });
 
         let userOrder = await Order.findOne({ email });
 
         if (!userOrder) {
             await Order.create({ email, order_data: [order_data] });
         } else {
             await Order.findOneAndUpdate(
                 { email },
                 { $push: { order_data: order_data } }
             );
         }
 
         res.json({ success: true });
     } catch (error) {
         console.error("Error processing order:", error);
         res.status(500).json({ error: "Internal Server Error" });
     }
 }); 
 
  module.exports = router;