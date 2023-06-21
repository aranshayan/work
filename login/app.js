const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', function() {
  function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const url = 'http://172.20.20.120:8080/api/login';
      const data = {
          username: username,
          password: password
      };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('رمز اشتباه هست');
      }
    })
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.debug('Error:', error.message);
      alert(error.message);
    });

      
  }

  document.getElementById('login-btn').addEventListener('click', login);
});
