require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration to allow requests from Angular
var corsOptions = {
  origin: "http://localhost:4200",
};
app.use(cors(corsOptions));

// Enable parsing of JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the port and start the server
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Initialize database connection with Sequelize
const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database initialized.");
  })
  .catch((err) => {
    console.error("Error initializing database: ", err);
  });

// Import routes
require("./app/routes/book.routes")(app);
