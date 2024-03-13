# Social Network API

This Social Network API is a backend application that simulates a simple social network's functionalities. It allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API is built with Node.js, Express.js, and MongoDB, utilizing Mongoose for data modeling.

## Features

- Create, read, update, and delete users.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/TarunPara/Social-Network-API.git
   ```
2. Navigate to the project directory:
   ```
   cd Social-Network-API
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Ensure MongoDB is running on your machine. If you're using a MongoDB Atlas, update the `MONGODB_URI` in your `.env` file.

5. Start the server:
   ```
   npm start
   ```

## Usage

The API endpoints can be tested using tools like Insomnia or Postman. Here are the available endpoints:

### User Routes

- `GET /api/users`: Fetch all users.
- `GET /api/users/:userId`: Fetch a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.

### Thought Routes

- `GET /api/thoughts`: Fetch all thoughts.
- `GET /api/thoughts/:thoughtId`: Fetch a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

### Reaction Routes

- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

### Friend Routes

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You should customize this template to reflect any specific features or routes your API offers. The `README.md` is an essential part of your repository as it provides potential users or contributors with a guide on how to install, use, and contribute to your project.