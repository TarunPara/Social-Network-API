const { User, Thought } = require("../models");

module.exports = {
  // Retrieve all thoughts from the database
  getThought(req, res) {
    Thought.find({})
      .then(thought => res.json(thought))
      .catch(err => res.status(500).json(err));
  },

  // Retrieve a single thought by its ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  // Create a new thought and associate it with a user
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "No user found with this ID!" })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  // Update a thought by its ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(user =>
        !user
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(user)
      )
      .catch(err => res.status(500).json(err));
  },

  // Delete a thought by its ID
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then(user =>
        !user
          ? res.status(404).json({ message: 'Thought deleted, but no user found' })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch(err => res.status(500).json(err));
  },

  // Add a reaction to a thought
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },

  // Delete a reaction from a thought
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then(thought =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(thought)
      )
      .catch(err => res.status(500).json(err));
  },
};
