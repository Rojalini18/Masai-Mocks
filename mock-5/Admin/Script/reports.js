import navbar from '../../Components/navbar.js';
import adminNavbar from '../Components/navbar.js';

let nav = document.getElementById('nav');
nav.innerHTML = navbar();

let adminNav = document.getElementById('adminNav');
adminNav.innerHTML = adminNavbar();

let card = document.getElementById('card');

const getUsers = async () => {
  let data = await fetch('https://user-json-server.herokuapp.com/users')
    .then((res) => res.json())
    .catch((e) => console.log(e));

  let map = new Map();
  for (let elem of data) {
    if (map.has(elem.profession)) {
      map.set(elem.profession, map.get(elem.profession) + 1);
    } else map.set(elem.profession, 1);
  }
  console.log(map);
  showData(map);
};

const showData = (data) => {
  card.innerHTML = '';
  let guest = data.get('FSD');
  let professional = data.get('Frontend') + data.get('Backend');
  let student = data.get('Student');
  console.log(guest, professional, student);
  let guests = document.createElement('h1');
  guests.innerText = 'Total Guest: ' + guest;
  let students = document.createElement('h1');
  students.innerText = 'Total Students: ' + student;
  let professionals = document.createElement('h1');
  professionals.innerText = 'Total Professionals: ' + professional;
  card.append(guests, students, professionals);
};

let token = JSON.parse(localStorage.getItem('token')) || { token: '' };
{
  token.token ? getUsers() : (window.location = './login.html');
}
