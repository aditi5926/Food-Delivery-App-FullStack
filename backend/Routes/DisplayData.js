const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  if (!global.food_items || global.food_items.length === 0) {
    return res.status(500).json({ error: 'Data not initialized yet' });
  }

  res.json({
    food_items: global.food_items,
    food_category: global.food_category
  });
});

module.exports = router;