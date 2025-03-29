module.exports = (app) => {
  const books = require("../controllers/book.controller.js");
  const router = require("express").Router();

  // Test route to check if the API is working
  router.get("/test", (req, res) => {
    res.json("Response from Node/Express API!");
  });

  // Retrieve all books, optionally filtered by title
  router.get("/", books.findAll);

  // Retrieve a book by id
  router.get("/:id", books.findOne);

  // Create a new book
  router.post("/", books.create);

  // Update a book
  router.put("/:id", books.update);

  // Delete a book
  router.delete("/:id", books.delete);

  app.use("/api/books", router);
};
