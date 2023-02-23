const { Post } = require("../models");

const postdata = [
  {
    post_title: "Loving ORM!",
    post_content:
      "Object-Relational Mapping makes using MySQL so much easier!",
    user_id: 1,
  },
  {
    post_title: "Bootstrap",
    post_content:
      "I highly recommend the Bootstrap framework to all my fellow front-end and full-stack developers.",
    user_id: 2,
  },
  {
    post_title: "OOP",
    post_content: "Most major software development is performed using OOP.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
