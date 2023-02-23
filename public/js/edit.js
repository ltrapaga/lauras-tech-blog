const post_id = document.querySelector(
  'input[name="post-id"]'
).value;
console.log(post_id);

const handleEditPost = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector(
    'input[name="post-title"]'
  ).value;
  const post_content = document.querySelector(
    'textarea[name="post-body"]'
  ).value;

  console.log(post_title);
  console.log(post_content);

  const res = await fetch(`/api/post/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Error updating post");
  }
  document.location.replace("/dashboard");
};

const handleDeletePost = async () => {
  await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-post")
  .addEventListener("submit", handleEditPost);
document
  .querySelector("#delete-post")
  .addEventListener("click", handleDeletePost);
