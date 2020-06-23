const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser'); included in express.json

const items = require("./routes/api/items");

//creating express server
const app = express();

// Bodyparser Middleware
// app.use(bodyParser.json());

app.use(express.json()); //to parse json

//DB Config
//uri is supposed to be got from mongo atlas
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("mongodb not connected");
    console.log(error);
  });

// mongoose.connect(db, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

//use routes (app.use(path, variable it should refer to))
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
