//external imports
const express = require("express");
const { default: mongoose } = require("mongoose");

//internal imports
const bookRouter = require("./routes/bookRouter");

const app = express();

//middlewares
app.use(express.json());
app.use("/books", bookRouter);

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
