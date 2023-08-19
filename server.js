const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

const UserRouter = require('./api/user');

// Import the database configuration
const db = require('./config/db');

// Middleware to parse incoming JSON data
app.use(express.json());

// Use the UserRouter for routes starting with '/users'
app.use('/user', UserRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
