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
        .then(response => response.json())
        .then(result => {

            console.log(result);

        })
        .catch(error => {
            console.error('Error:', error);
            alert('Account doesnt exist');
        });
        
    }

    document.getElementById('login-btn').addEventListener('click', login);
});
