//external imports
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();

app.use("/", (req, res, next) => {
  res.send("Main Page");
});

//Server and MongoDB connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://admin:CMXWkk9d7mrmkDiF@bookstore.bpvpxbs.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(PORT);
  })
  .then(() => console.log("App is listening on port 5000"))
  .catch((err) => console.log(err));
