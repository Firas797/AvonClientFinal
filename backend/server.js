const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const ProductsRoutes = require('./Routes/ProductsRoutes')
const userRoutes = require('./Routes/UserRoutes')
const orderRoutes = require('./Routes/OrderRoutes')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');



// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create the Express app
const app = express();
app.use(cors());
app.use(helmet());

// Middleware
app.use(express.json());
app.options('*', cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
  });
  app.use('/api/products', ProductsRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes); // Use your order routes



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
