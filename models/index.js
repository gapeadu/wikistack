const Sequelize = require("sequelize");
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

const Page = db.define("page", {
  field: {
    type: Sequelize.TEXT,
  },
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM("open", "close"),
  },
});

module.exports = {
  db,
  User,
  Page,
};
