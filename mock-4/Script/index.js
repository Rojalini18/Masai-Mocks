import navbar from './Components/navbar.js';

let nav = document.getElementById('navbar');
nav.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem('token')) || '';
console.log(data);
const { username, token } = data;

const getUser = async () => {
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  console.log(res);
  showUser(res);
};

{
  token ? getUser() : (window.location = './login.html');
}
let parentDiv = document.getElementById('user');

const showUser = (user) => {
  parentDiv.innerHTML = '';
  let userCard = document.createElement('div');
  userCard.setAttribute('id', 'userCard');
  let name = document.createElement('h1');
  name.innerText = 'Name: ' + user.name;
  let email = document.createElement('h1');
  email.innerText = 'Email: ' + user.email;
  let username = document.createElement('h1');
  username.innerText = 'Username: ' + user.username;
  let mobile = document.createElement('h1');
  mobile.innerText = 'Mobile: ' + user.mobile;
  let description = document.createElement('h1');
  description.innerText = 'Description: ' + user.description;
  userCard.append(name, email, username, mobile, description);
  parentDiv.append(userCard);
};
