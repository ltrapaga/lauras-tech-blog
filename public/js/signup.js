const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  console.log(username);
  console.log(password);
  const res = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Could not sign up!');
  }
};

document
  .querySelector('.thesignup')
  .addEventListener('submit', signupFormHandler);
