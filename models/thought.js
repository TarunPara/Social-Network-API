// Import the necessary classes from mongoose and the moment module for date formatting
const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Define the schema for a reaction
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,  // Maximum length for the reaction body
  },
  username: {
    type: String,
    required: true,  // Username is required
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Set default date as the current date
    // Use moment to format the createdAt date
    get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
}, {
  toJSON: {
    virtuals: true,
    getters: true,  // Use getters to transform data during the query
  },
  id: false,  // Don't include an automatic id field
});

// Define the schema for a thought
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,  // Minimum length for thought text
    maxlength: 280,  // Maximum length for thought text
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Set default date as the current date
    // Use moment to format the createdAt date
    get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  },
  username: {
    type: String,
    required: true,  // Username is required
  },
  reactions: [reactionSchema],  // Array of reactions, using the reaction schema
}, {
  toJSON: {
    virtuals: true,
    getters: true,  // Use getters to transform data during the query
  },
  id: false,  // Don't include an automatic id field
});

// Define a virtual property 'reactionCount' that returns the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Initialize the Thought model with the schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;
