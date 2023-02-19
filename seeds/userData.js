const { User } = require('../models');

const userdata =
[
  {
    "username": "Michael",
    "password": "password123!"
  },
  {
    "username": "Sarah",
    "password": "password123!"
  },
  {
    "username": "Erin",
    "password": "password123!"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

