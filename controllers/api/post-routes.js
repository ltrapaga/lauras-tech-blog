const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const createNewPost = await Post.create({
      ...body,
      user_id: req.session.user_id,
    });
    console.log("New post: ", createNewPost);
    res.json(createNewPost);
  } catch (err) {
    console.log("Error creating new post", err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const [rowsAffected] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (rowsAffected > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [rowsAffected] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rowsAffected > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
