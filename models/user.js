// Import necessary Mongoose classes
const { Schema, model, Types } = require('mongoose');

// Define the schema for the User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,  // Ensure usernames are unique
    required: true,  // Make username a required field
    trim: true,  // Trim whitespace from the username
  },
  email: {
    type: String,
    required: true,  // Make email a required field
    unique: true,  // Ensure email addresses are unique
    match: [  // Validate the email format
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: "Thought",  // Reference the Thought model
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: "User",  // Reference the User model itself for friends
  }],
}, {
  toJSON: {
    virtuals: true,  // Include virtuals when converting to JSON
  },
  id: false,  // Do not include the auto-generated ID
});

// Define a virtual property 'friendCount' that returns the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize the User model with the schema
const User = model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
