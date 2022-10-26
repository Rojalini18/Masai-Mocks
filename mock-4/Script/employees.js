import navbar from './Components/navbar.js';
let sort = document.querySelector('.sort');
let filter = document.querySelector('.filter');
let input = document.querySelector('.inputSearch');
let search = document.querySelector('.search');

const url =
  'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
  
let token = localStorage.getItem('token');
{
  !token ? (window.location = './login.html') : '';
}

input.addEventListener('change', (e) => {
  input = e.target.value;
});
search.addEventListener('click', async (e) => {
  let data = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
  data = data.filter((el) => el.name === input);
  showEmployees(data);
});

sort.addEventListener('change', async (e) => {
  let data = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
  if (e.target.value == 'desc') data.sort((a, b) => b.salary - a.salary);
  else if (e.target.value == 'asc') data.sort((a, b) => a.salary - b.salary);
  showEmployees(data);
});

filter.addEventListener('change', async (e) => {
  console.log(e.target.value);
  let data = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
  console.log(data);
  data = data.filter((el) => el.department === e.target.value);
  console.log(data);
  showEmployees(data);
});



let nav = document.getElementById('navbar');
nav.innerHTML = navbar();

let employees = document.getElementById('employees');

const getEmployees = async (url) => {
  let data = await fetch(url)
    .then((res) => res.json())
    .then((res) => res);
  console.log(data.totalPages);
  showEmployees(data.data);
  let page = document.getElementById('page');
  for (let i = 0; i < data.totalPages; i++) {
    let button = document.createElement('button');
    button.innerText = i + 1;
    button.addEventListener('click', async (e) => {
      let pageData = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${
          i + 1
        }`
      )
        .then((res) => res.json())
        .then((res) => res.data);
      showEmployees(pageData);
    });
    page.append(button);
  }
};

getEmployees(url);

const showEmployees = (data) => {
  employees.innerHTML = '';
  data.map((e) => {
    let card = document.createElement('div');
    card.setAttribute('id', 'card');
    let profile = document.createElement('img');
    profile.setAttribute(
      'src',
      'https://www.sarojhospital.com/images/testimonials/dummy-profile.png'
    );
    let name = document.createElement('h2');
    name.innerText = e.name;
    let department = document.createElement('h2');
    department.innerText = e.department;
    let gender = document.createElement('h2');
    gender.innerText = e.gender;
    let salary = document.createElement('h2');
    salary.innerText = e.salary;

    card.append(profile, name, department, gender, salary);
    employees.append(card);
  });
};
