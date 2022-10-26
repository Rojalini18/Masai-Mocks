let wishlist = JSON.parse(localStorage.getItem("wish"));
console.log("wishlist:", wishlist);

wishlist.map(function (el) {
  let main = document.createElement("div");
  main.setAttribute("class", "main");
  let imgdiv = document.createElement("div");
  imgdiv.setAttribute("class", "imgdiv");
  let image = document.createElement("img");
  image.src = el.image;
  image.setAttribute("class", "img");
  let title = document.createElement("h3");
  title.textContent = el.title;
  let brand = document.createElement("h5");
  brand.textContent = el.brand;
  let category = document.createElement("p");
  category.textContent = el.category;
  let price = document.createElement("h5");
  price.textContent = el.price;
  imgdiv.append(image);
  main.append(imgdiv, title, brand, category, price);
  document.querySelector("#wishdata").append(main);
});
