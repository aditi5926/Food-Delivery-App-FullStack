const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "HelloThisProjectIsSecret";
router.post(
  '/createuser',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
);



//login user
router.post(
     '/loginuser',
     [
       body('email').isEmail().withMessage('Invalid email address'),
       body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
     ],
     async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
     }
      let email = req.body.email;
       try {
         let userData = await User.findOne({email});
          if(!userData){
               return res.status(400).json({success : false, error : "Email not found"});
          }
          const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
          if(!pwdCompare){
               return res.status(400).json({success : false, error : "Password incorrect"});
          }
          const data = {
               user : {
                    id : userData.id
               }
          }
          const authToken = jwt.sign(data, jwtSecret);
          return res.json({success : true, authToken : authToken});

       } catch (err) {
         console.log(err);
         res.status(500).json({ success: false, error: 'Internal server error' });
       }
     }
);

module.exports = router;
