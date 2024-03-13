const router = require('express').Router();

// Importing thought controller functions
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Route to get all thoughts and post a new thought
router.route('/')
      .get(getThought)  // GET all thoughts
      .post(createThought);  // POST a new thought

// Route to get, update, and delete a single thought by ID
router.route('/:thoughtId')
      .get(getSingleThought)  // GET a single thought by ID
      .put(updateThought)  // UPDATE a thought by ID
      .delete(deleteThought);  // DELETE a thought by ID

// Route to post a new reaction to a thought
router.route('/:thoughtId/reactions')
      .post(createReaction);  // POST a new reaction

// Route to delete a reaction from a thought by reaction ID
router.route('/:thoughtId/reactions/:reactionId')
      .delete(deleteReaction);  // DELETE a reaction by ID

// Export the router
module.exports = router;
