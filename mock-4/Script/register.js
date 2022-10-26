import navbar from './Components/navbar.js';

let nav = document.getElementById('navbar');
nav.innerHTML = navbar();

let login = document.getElementById('login').addEventListener('click', () => {
  window.location = './login.html';
});

let signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let input = e.target;
  //   let name = document.getElementById('name').value;
  //   let email = document.getElementById('email').value;
  //   let username = document.getElementById('username').value;
  //   let password = document.getElementById('password').value;
  //   let mobile = document.getElementById('mobile').value;
  //   let description = document.getElementById('description').value;
  //   console.log(input.description.value);
  let body = {
    name: input.name.value,
    email: input.email.value,
    username: input.username.value,
    password: input.password.value,
    mobile: input.mobile.value,
    description: input.description.value,
  };
  console.log(body);
  let res = await fetch(
    'https://masai-api-mocker.herokuapp.com/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  console.log(res);
  {
    res.error
      ? alert(res.message)
      : (alert(res.message), (window.location = './login.html'));
  }
});
