const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body><form id="signup-form"><input type="email" id="signup-email" value="user1@example.com"><input type="password" id="signup-password" value="password1"></form><form id="signin-form"><input type="email" id="signin-email" value="user1@example.com"><input type="password" id="signin-password" value="password1"></form><form id="forgot-password-form"><input type="email" id="forgot-password-email" value="user1@example.com"></form></body></html>');
const { window } = jsdom;

describe('Authentication', () => {
  it('should sign up a new user', () => {
    const signUpForm = window.document.getElementById('signup-form');
    signUpForm.dispatchEvent(new window.Event('submit'));
    const users = JSON.parse(window.localStorage.getItem('users'));
    expect(users.length).toBe(4);
  });
    
  it('should not sign up an existing user', () => {
    const signUpForm = window.document.getElementById('signup-form');
    const emailInput = window.document.getElementById('signup-email');
    const passwordInput = window.document.getElementById('signup-password');
    emailInput.value = 'user1@example.com';
    passwordInput.value = 'password1';
    signUpForm.dispatchEvent(new window.Event('submit'));
    const alert = window.alert;
    expect(alert).toHaveBeenCalledWith('User already exists! Please sign in.');
  });
    
  it('should sign in a valid user', () => {
    const signInForm = window.document.getElementById('signin-form');
    signInForm.dispatchEvent(new window.Event('submit'));
    const alert = window.alert;
    expect(alert).toHaveBeenCalledWith('Sign in successful!');
  });
    
  it('should not sign in an invalid user', () => {
    const signInForm = window.document.getElementById('signin-form');
    const emailInput = window.document.getElementById('signin-email');
    const passwordInput = window.document.getElementById('signin-password');
    emailInput.value = 'user1@example.com';
    passwordInput.value = 'invalid-password';
    signInForm.dispatchEvent(new window.Event('submit'));
    const alert = window.alert;
    expect(alert).toHaveBeenCalledWith('Invalid email or password!');
  });
    
  it('should send a password reset link to a valid email', () => {
    const forgotPasswordForm = window.document.getElementById('forgot-password-form');
    forgotPasswordForm.dispatchEvent(new window.Event('submit'));
    const alert = window.alert;
    expect(alert).toHaveBeenCalledWith('Password reset link sent to your email!');
  });
    
  it('should not send a password reset link to an invalid email', () => {
    const forgotPasswordForm = window.document.getElementById('forgot-password-form');
    const emailInput = window.document.getElementById('forgot-password-email');
    emailInput.value = 'invalid-email';
    forgotPasswordForm.dispatchEvent(new window.Event('submit'));
    const alert = window.alert;
    expect(alert).toHaveBeenCalledWith('Invalid email!');
  });
});
