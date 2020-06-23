const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); included in express.json

//creating express server
const app = express();

// Bodyparser Middleware
// app.use(bodyParser.json());

app.use(express.json());    //to parse json

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));