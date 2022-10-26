import navbar from '../../Components/navbar.js';

let nav = document.getElementById('nav');
nav.innerHTML = navbar();

let register = document.getElementById('register');

register.addEventListener('submit', async (e) => {
  e.preventDefault();
  let { name, age, place, batch_name, profession } = e.target;
  let body = {
    name: name.value,
    age: age.value,
    place: place.value,
    batch_name: batch_name.value,
    profession: profession.value,
  };

  await fetch('https://user-json-server.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    // .then((res) => console.log(res))
    .then((res) => alert('successfully registered'))
    .catch((e) => console.log(e));
});
