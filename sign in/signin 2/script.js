const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' }
];

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('User already exists! Please sign in.');
    return;
  }

  users.push({ email, password });

  document.getElementById('signup-form').reset();

  alert('Sign up successful! Please sign in.');
});

document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    alert('Sign in successful!');
  } else {
    alert('Invalid email or password!');
  }

  document.getElementById('signin-form').reset();
});

document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('forgot-password-email').value;

  const user = users.find(user => user.email === email);
  if (user) {
    alert('Password reset link sent to your email!');
  } else {
    alert('Invalid email!');
  }

  document.getElementById('forgot-password-form').reset();
});
