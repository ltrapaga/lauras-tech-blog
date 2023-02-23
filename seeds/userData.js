const { User } = require("../models");

const userdata = [
  {
    username: "SarahM",
    password: "password123!",
  },
  {
    username: "MichaelT",
    password: "password123!",
  },
  {
    username: "ErinC",
    password: "password123!",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
