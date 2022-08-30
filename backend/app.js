//external imports
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

//internal imports
const bookRouter = require("./routes/bookRouter");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/books", bookRouter);

//Server and MongoDB connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(PORT);
  })
  .then(() => console.log(`App is listening on port ${PORT}`))
  .catch((err) => console.log(err));
