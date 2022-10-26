import navbar from '../../Components/navbar.js';
import adminNavbar from '../Components/navbar.js';

let nav = document.getElementById('nav');
nav.innerHTML = navbar();

let adminNav = document.getElementById('adminNav');
adminNav.innerHTML = adminNavbar();

let show = document.getElementById('show');
let name = document.getElementById('name');

name.addEventListener('keyup', async (e) => {
  console.log(e.target.value);
  await fetch(
    `https://user-json-server.herokuapp.com/users?q=${e.target.value}`
  )
    .then((res) => res.json())
    .then((res) => showUsers(res))
    .catch((e) => console.log(console.log(e)));
});

// Sort by age
let sort = document.getElementById('sort');
sort.addEventListener('change', (e) => {
  getUsers();
});

// Filter by batch name
let filter = document.getElementById('filter');
filter.addEventListener('change', (e) => {
  getUsers();
});

// Getting user by deplay json server
const getUsers = async () => {
  // console.log('hello');
  let data = await fetch('https://user-json-server.herokuapp.com/users')
    .then((res) => res.json())
    .catch((e) => console.log(e));
  showUsers(data);
};

// Showing Users in form of cards
const showUsers = (data) => {
  // sorting part
  if (sort.value === 'Low to Hight') {
    data = data.sort((a, b) => a.age - b.age);
  } else if (sort.value === 'Hight to Low') {
    data = data.sort((a, b) => b.age - a.age);
  }
  if (filter.value) {
    data = data.filter((e) => e.batch_name === filter.value);
  }

  show.innerHTML = '';
  data.map((e) => {
    let userCard = document.createElement('div');
    userCard.setAttribute('id', 'userCard');
    let imgDiv = document.createElement('div');
    let detailDiv = document.createElement('div');
    let button = document.createElement('div');

    let name = document.createElement('p');
    name.innerText = 'Name: ' + e.name;
    let age = document.createElement('p');
    age.innerText = 'Age: ' + e.age;
    let profile = document.createElement('img');
    profile.setAttribute(
      'src',
      'https://pbcdn1.podbean.com/imglogo/image-logo/4605600/Rokucomlinks_net.png'
    );
    let batch = document.createElement('p');
    batch.innerText = 'Batch: ' + e.batch_name;
    let profession = document.createElement('p');
    profession.innerText = 'Profession: ' + e.profession;

    // Delete user
    let del = document.createElement('button');
    del.innerHTML = 'Delete';
    del.addEventListener('click', () => deleteUser(e));

    // Update user
    let update = document.createElement('button');
    update.innerHTML = 'Update';
    update.addEventListener('click', () => upd());
    const upd = () => {
      let updateDiv = document.createElement('div');
      let save = document.createElement('button');
      save.innerHTML = 'Save';
      let select = document.createElement('select');
      select.setAttribute('id', 'update');
      let opt1 = document.createElement('option');
      opt1.innerHTML = 'FSD';
      let opt2 = document.createElement('option');
      opt2.innerHTML = 'Frontend';
      let opt3 = document.createElement('option');
      opt3.innerHTML = 'Backend';
      let opt4 = document.createElement('option');
      opt4.innerHTML = 'Student';
      select.append(opt1, opt2, opt3, opt4);
      updateDiv.append(select, save);
      userCard.innerHTML = '';
      userCard.append(imgDiv, detailDiv, button, updateDiv);

      let updateProfession = document.getElementById('update');
      save.addEventListener('click', () =>
        updateUser(e, updateProfession.value)
      );
    };

    button.append(del, update);
    detailDiv.append(name, age, batch, profession);
    imgDiv.append(profile);
    userCard.append(imgDiv, detailDiv, button);
    show.append(userCard);
  });
};

// Delete user
const deleteUser = async (user) => {
  await fetch(`https://user-json-server.herokuapp.com/users/${user.id}`, {
    method: 'DELETE',
  }).then((res) => alert(`${user.name} has breen removed`));
  getUsers('https://user-json-server.herokuapp.com/users');
};

// Update user
const updateUser = async (user, profession) => {
  console.log(profession);
  let { name, age, place, batch_name } = user;
  let body = {
    name,
    age,
    place,
    batch_name,
    profession,
  };
  console.log(body);
  await fetch(`https://user-json-server.herokuapp.com/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
  getUsers('https://user-json-server.herokuapp.com/users');
};

let token = JSON.parse(localStorage.getItem('token')) || { token: '' };
{
  token.token ? getUsers() : (window.location = './login.html');
}
