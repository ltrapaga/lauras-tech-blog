const router = require("express").Router();
const { Post, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const allPosts = postData.map((post) => post.get({ plain: true }));
    console.log(allPosts);

    res.render("all-posts", {
      layout: "dashboard",
      posts: allPosts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const allPosts = postData.get({ plain: true });
      console.log(allPosts);
      res.render("edit-post", {
        layout: "dashboard",
        post: allPosts,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
