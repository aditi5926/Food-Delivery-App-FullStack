const mongoose = require('mongoose')
const {Schema} = mongoose;

const OrderSchema = new Schema({
     email: {
         type: String,
         required: true,
         unique: true
     },
     order_data: {
        type: [Schema.Types.Mixed], // Allows flexible order data format
        required: true,
    },
 
 });
 
 module.exports = mongoose.model('order', OrderSchema)