const handleNewPost = async function (event) {
  event.preventDefault();

  const post_title = document.querySelector(
    'input[name="post-title"]'
  ).value;
  const post_content = document.querySelector(
    'textarea[name="post-body"]'
  ).value;

  console.log(post_title);
  console.log(post_content);

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      post_title: post_title,
      post_content: post_content,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .querySelector("#new-post")
  .addEventListener("submit", handleNewPost);
