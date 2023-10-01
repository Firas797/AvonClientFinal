const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

// Register a new user
exports.register = async (req, res) => {
    try {
      const { code,  password } = req.body;
  
      // Check if the code is already registered
      const existingUser = await User.findOne({ code });
      if (existingUser) {
        return res.status(400).json({ message: 'Code is already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({
        code,
    
        password: hashedPassword
      });
  
      await user.save();
  
      
  
      // Generate an access token
      const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h' // Set the expiration time for the access token
      });
  
      res.status(201).json({
        message: 'User registered successfully',
        accessToken
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Log in a user

exports.login = async (req, res) => {
  try {
    const { code, password } = req.body;

    // Check if the code exists
    const user = await User.findOne({ code });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a session token
    const sessionToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h' // Set the expiration time for the session token
    });

    // Generate an access token
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '15m' // Set the expiration time for the access token
    });

    // Generate a refresh token
    const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d' // Set the expiration time for the refresh token (long-lived)
    });

    res.status(200).json({
      message: 'User logged in successfully',
      userCode: code,
  
      accessToken,
      refreshToken
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Log out a user
exports.logout = async (req, res) => {
  try {
    // Perform any necessary actions for logging out a user
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
