const express = require("express");
const morgan = require("morgan");
const app = express();
const { main } = require("./views");
const { db, User, Page } = require("./models");
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname, +"./public"));

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send(main(" "));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });
  // await Page.sync();
  // await User.sync();
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
};
init();
