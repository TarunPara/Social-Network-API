// Import express router and route modules
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtroutes');

// Use userRoutes for requests to '/users'
router.use('/users', userRoutes);

// Use thoughtRoutes for requests to '/thoughts'
router.use('/thoughts', thoughtRoutes);

// Export the configured router
module.exports = router;
