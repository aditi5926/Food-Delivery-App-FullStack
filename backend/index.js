const express = require('express');
const cors = require('cors');
const mongoDB = require('./db');
const app = express();
const port = 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Food Delivery Backend is Running!');
});

(async () => {
  try {
    await mongoDB();    
    app.use('/api', require('./Routes/CreateUser'));
    app.use('/api', require('./Routes/DisplayData'));
    app.use('/api', require('./Routes/OrderData'));

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error initializing MongoDB:', err);
    process.exit(1); // Exit on error
  }
})();