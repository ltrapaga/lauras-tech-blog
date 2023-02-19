const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Loving ORM",
    "postContent": "I am so happy to finally be using Object-Relational Mapping! Now, when I change the underlying database, I no longer need to rewrite code.",
    "userId": 1
  },
  {
    "postTitle": "Bootstrap",
    "postContent": "I highly recommend Bootstrap to my fellow front-end and full-stack developers. As a framework, Bootstrap includes the basics for responsive web development, so developers only need to insert the code into a pre-defined grid system. The Bootstrap framework is built on HTML, CSS, and JavaScript. Developers using Bootstrap can build websites much faster without spending time worrying about basic commands and functions.",
    "userId": 2
  },
  {
    "postTitle": "Object-Oriented Programming",
    "postContent": "Most major software development is performed using OOP. Make sure to study up before an interview!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;