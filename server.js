const express = require("express");



const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});

// const Sequelize = require('sequelize'), connection;
// if (process.env.JAWSDB_URL) {
//   connection = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   connection = new Sequelize('burgers_db', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: '3000'
//   })
// }
