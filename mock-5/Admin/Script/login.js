import navbar from '../../Components/navbar.js';
import adminNavbar from '../Components/navbar.js';

let nav = document.getElementById('nav');
nav.innerHTML = navbar();

let adminNav = document.getElementById('adminNav');
adminNav.innerHTML = adminNavbar();

let login = document.getElementById('loginForm');

login.addEventListener('submit', async (e) => {
  e.preventDefault();
  let { email, password } = e.target;
  let body = {
    email: email.value,
    password: password.value,
  };
  console.log(body);
  await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('token', JSON.stringify(res));
      window.location = './data.html';
    })
    .catch((e) => console.log(e));
});
