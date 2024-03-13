// Import the Express router and the API routes
const router = require('express').Router();
const apiRoutes = require('./api'); // Import API routes from the api directory

// Prefix all API routes with `/api`
router.use('/api', apiRoutes);

// Handle requests to non-existent routes
router.use((req, res) => res.send('Wrong route!'));

// Export the configured router
module.exports = router;
