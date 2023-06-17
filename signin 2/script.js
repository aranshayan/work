// Mock user data
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' }
];

// Sign Up form submit event handler
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('User already exists! Please sign in.');
    return;
  }

  // Add new user to the mock data
  users.push({ email, password });

  // Reset form
  document.getElementById('signup-form').reset();

  alert('Sign up successful! Please sign in.');
});

// Sign In form submit event handler
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  // Check if user exists and password is correct
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    alert('Sign in successful!');
    // Redirect to another page or perform further actions
  } else {
    alert('Invalid email or password!');
  }

  // Reset form
  document.getElementById('signin-form').reset();
});

// Forgot Password form submit event handler
document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form value
  const email = document.getElementById('forgot-password-email').value;

  // Check if user exists
  const user = users.find(user => user.email === email);
  if (user) {
    alert('Password reset link sent to your email!');
    // Perform further actions like sending a password reset email
  } else {
    alert('Invalid email!');
  }

  // Reset form
  document.getElementById('forgot-password-form').reset();
});
