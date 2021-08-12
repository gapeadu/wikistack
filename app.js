const express = require("express");
const morgan = require("morgan");
const app = express();
const { main } = require("./views");

const { db} = require("./models");
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname, +"./public"));

app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.redirect('/wiki');
});




db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
};

init();
