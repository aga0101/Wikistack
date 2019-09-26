const express = require("express");
const morgan = require('morgan');
const {db} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
// ...



// const client = require("./db");
// const postList = require("./views/postList");
// const postDetails = require("./views/postDetails");



const app = express();

// app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);

// const routes = require('./routes/posts');
// app.use('/posts', routes);

app.use(morgan("dev"));
app.use('/static', express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

// app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.send('Hello')
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