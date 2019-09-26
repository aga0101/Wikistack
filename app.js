const express = require("express");
const morgan = require('morgan');
const {db} = require('./models');

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
app.get('/', (req, res) => {
    res.send('')
  });

// db.authenticate().
// then(() => {
//     console.log('connected to the database');
// })
const PORT = 3000;

const init = async () => {
  await db.sync({force: true})
  console.log(db.models.page);

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
  });

}
 
init();