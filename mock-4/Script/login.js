import navbar from './Components/navbar.js';

let nav = document.getElementById('navbar');
nav.innerHTML = navbar();

let register = document
  .getElementById('register')
  .addEventListener('click', () => {
    window.location = './register.html';
  });

let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let body = {
    username: username,
    password: password,
  };

  let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => alert('Wrong Credential entered'));
  {
    !res.error
      ? (localStorage.setItem(
          'token',
          JSON.stringify({
            token: res.token,
            username: username,
          })
        ),
        alert('Login Succes'),
        (window.location = './index.html'))
      : '';
  }
});
