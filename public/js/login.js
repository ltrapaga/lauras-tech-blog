const handleLogin = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");

  const res = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Error logging in");
  }
};

document
  .querySelector("#login")
  .addEventListener("submit", handleLogin);
