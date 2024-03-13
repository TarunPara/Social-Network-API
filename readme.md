
# Social Network API

The Social Network API is a backend application designed to emulate the functionalities of a basic social network platform. It provides a robust set of APIs to manage users, thoughts, reactions, and friendships, utilizing Node.js, Express.js, MongoDB, and Mongoose.

## Features

- **Users**: Sign up, update profiles, view other users, and delete accounts.
- **Thoughts**: Users can post thoughts, update them, view the thoughts of others, and delete their own thoughts.
- **Reactions**: Support for users to react to thoughts, providing an interactive experience.
- **Friendships**: Users can add others as friends and remove friendships, simulating a basic social networking feature.

## Installation

To get this API up and running on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TarunPara/Social-Network-API.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Social-Network-API
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the MongoDB service** (ensure MongoDB is installed on your machine).
5. **Configure your environment variables**:
   - Rename `.env.example` to `.env`.
   - Modify the `MONGODB_URI` in the `.env` file to point to your MongoDB database.
6. **Start the server**:
   ```bash
   npm start
   ```

## Usage

With the server running, you can use tools like Postman or Insomnia to test the API endpoints. Below are the available endpoints and their functions:

### User Endpoints

- **Create User**: `POST /api/users` - Register a new user.
- **Get Users**: `GET /api/users` - Retrieve all users.
- **Get User by ID**: `GET /api/users/:userId` - Retrieve a single user by ID.
- **Update User**: `PUT /api/users/:userId` - Update user details.
- **Delete User**: `DELETE /api/users/:userId` - Delete a user.

### Thought Endpoints

- **Create Thought**: `POST /api/thoughts` - Post a new thought.
- **Get Thoughts**: `GET /api/thoughts` - Get all thoughts.
- **Get Thought by ID**: `GET /api/thoughts/:thoughtId` - Get a specific thought.
- **Update Thought**: `PUT /api/thoughts/:thoughtId` - Update a thought.
- **Delete Thought**: `DELETE /api/thoughts/:thoughtId` - Remove a thought.

### Reaction Endpoints

- **Add Reaction**: `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- **Delete Reaction**: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction.

### Friendship Endpoints

- **Add Friend**: `POST /api/users/:userId/friends/:friendId` - Add a friend.
- **Delete Friend**: `DELETE /api/users/:userId/friends/:friendId` - Remove a friend.

## Contributing

If you're interested in contributing to this project, your help is very welcome! Feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


