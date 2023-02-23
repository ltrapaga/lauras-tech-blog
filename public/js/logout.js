const handleLogout = async function () {
  const res = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/");
    alert("Logout successful");
  } else {
    alert("Error logging out");
  }
};

document.querySelector("#logout").addEventListener("click", handleLogout);
