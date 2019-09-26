const express = require("express");
const morgan = require("morgan");
// const client = require("./db");
// const postList = require("./views/postList");
// const postDetails = require("./views/postDetails");


const app = express();

// const routes = require('./routes/posts');
// app.use('/posts', routes);

app.use(morgan("dev"));
app.use('/static', express.static(__dirname + "/public"));

// app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")))
