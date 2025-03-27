const mongoose = require('mongoose');
require('dotenv').config(); 
const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Fetch data from food_items and food_category collections
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    // Set the data to global variables after both are fetched
    global.food_items = fetched_data;
    global.food_category = foodCategory;

//     console.log("Food Items:", global.food_items);
//     console.log("Food Categories:", global.food_category);

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = mongoDB;
