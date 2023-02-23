const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User],
    });

    const comment = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comment);
    res.render("single-post", {
      comments: comment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  const bodies = req.body;

  try {
    const createComment = await Comment.create({
      ...bodies,
      user_id: req.session.user_id,
    });
    res.json(createComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
