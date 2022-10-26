let container = document.getElementById("carsContainer");
let data = [];
let filteredData = [];

const getCars = async () => {
  try {
    let res = await fetch("https://json-server-mocker-app.herokuapp.com/cars");
    data = await res.json();
    data = [...data];
    filteredData = data;
    renderCard(data);
  } catch (error) {
    console.log(error);
  }
};
getCars();

const renderCard = (data) => {
  container.innerHTML = "";

  data.map((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let flexDiv = document.createElement("div");
    flexDiv.setAttribute("class", "flexDiv");

    let topDiv = document.createElement("div");
    topDiv.setAttribute("class", "topDiv");

    let brandDiv = document.createElement("div");
    let typeDiv = document.createElement("div");
    let yearDiv = document.createElement("div");
    let kmsDiv = document.createElement("div");
    let descpDiv = document.createElement("div");
    let deleteDiv = document.createElement("div");
    let editDiv = document.createElement("div");
    let priceDiv = document.createElement("div");
    let wishlistDiv = document.createElement("div");

    let brand = document.createElement("p");
    brand.innerText = `Brand: ${el.brand}`;
    let year = document.createElement("p");
    year.innerText = `Year: ${el.year}`;
    let type = document.createElement("p");
    type.innerText = `Type: ${el.type}`;
    let kms = document.createElement("p");
    kms.innerText = `Kms-Driven :${el.kms} kilometer`;
    let description = document.createElement("p");
    description.innerText = `Description :${el.Description}`;
    let price = document.createElement("p");
    price.innerText = `Price :${el.Price} Rs`;

    let remove = document.createElement("button");
    remove.setAttribute("class", "removeIcon");
    remove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    remove.onclick = () => {
      deleteData(el.id);
    };

    let wishlist = document.createElement("button");
    wishlist.setAttribute("class", "add");
    wishlist.innerText = "ADD TO FAVOURITE";
    wishlist.onclick = () => {
      let Data = JSON.stringify(el);
      addToList(Data);
    };

    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.innerText = "EDIT";

    brandDiv.append(brand);
    yearDiv.append(year);
    typeDiv.append(type);
    kmsDiv.append(kms);
    descpDiv.append(description);
    priceDiv.append(price);
    deleteDiv.append(remove);
    wishlistDiv.append(wishlist);
    editDiv.append(edit);
    topDiv.append(brandDiv, deleteDiv);
    flexDiv.append(editDiv, wishlistDiv);
    card.append(topDiv, yearDiv, typeDiv, kmsDiv, descpDiv, priceDiv, flexDiv);

    container.append(card);
  });
};

const deleteData = (id) => {
  console.log("id", id);

  fetch(`https://json-server-mocker-app.herokuapp.com/cars/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      getCars(res);
    })
    .catch((err) => console.log(data));
};

const addToList = (payload) => {
  fetch("https://json-server-mocker-app.herokuapp.com/wishlisted_cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Added to wishlist");
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const filter = () => {
  let filterValue = document.getElementById("filter").value;

  if (filterValue === "") {
    renderCard(data);
  } else {
    filteredData = data.filter((el) => {
      return filterValue === el.brand;
    });
    renderCard(filteredData);
  }
};

const sort = () => {
  let selected = document.getElementById("sort").value;

  if (selected == "asc") {
    filteredData.sort((a, b) => {
      return parseInt(a.Price) - parseInt(b.Price);
    });
    renderCard(filteredData);
  }
  if (selected == "desc") {
    filteredData.sort((a, b) => {
      return parseInt(b.Price) - parseInt(a.Price);
    });
    renderCard(filteredData);
  }
};

const sortKms = () => {
  let selected = document.getElementById("sortKms").value;

  if (selected == "asc") {
    filteredData.sort((a, b) => {
      return parseInt(a.kms) - parseInt(b.kms);
    });
    renderCard(filteredData);
  }
  if (selected == "desc") {
    filteredData.sort((a, b) => {
      return parseInt(b.kms) - parseInt(a.kms);
    });
    renderCard(filteredData);
  }
};
