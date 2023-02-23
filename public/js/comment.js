const post_id = document.querySelector('input[name="post-id"]').value;

console.log(post_id);

const handleComment = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;
  console.log(comment_content);

  if (comment_content) {
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_content: comment_content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      document.location.reload();
    } else {
      alert(res.statusText);
    }
  }
};

document
  .querySelector("#new-comment")
  .addEventListener("submit", handleComment);
