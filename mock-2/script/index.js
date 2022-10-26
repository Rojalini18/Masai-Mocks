// Getting data from db.json
let data = [];
let fileredData = [];
let pagination_root = document.getElementById("pagination");
async function fetchData() {
  data = await fetch("../data/db.json");
  data = await data.json();
  fileredData = data;
  // renderData(data);
  renderPagination(data);
}
fetchData();

//Pagination Variables and Functionality
const per_page = 10;
let current_page = 1;

//Pagination buttons
function renderPagination(data) {
  pagination_root.innerHTML = null;
  let pages = Math.ceil(data.length / per_page);
  paginatedList(data, current_page, per_page);
  for (let page = 1; page <= pages; page++) {
    let button = document.createElement("button");
    button.setAttribute("class", "pagination-btn");
    button.innerText = page;
    button.addEventListener("click", () => {
      current_page = page;
      paginatedList(data, current_page, per_page);
    });
    pagination_root.append(button);
  }
}

//Paginated list
function paginatedList(data, current_page, per_page) {
  let start = per_page * (current_page - 1);
  let end = per_page * current_page;
  let paginatedData = data.slice(start, end);
  renderData(paginatedData);
}

// Rendering job lisitings
function renderData(data) {
  let root = document.getElementById("root");
  root.innerHTML = null;

  data.map((el, index) => {
    let container = document.createElement("div");
    container.setAttribute("class", "job-listing");

    let left_container = document.createElement("div");
    left_container.setAttribute("class", "left-container");

    let image_left_container = document.createElement("div");
    let company_img = document.createElement("img");
    company_img.setAttribute(
      "src",
      "https://d2fltix0v2e0sb.cloudfront.net/dev-rainbow.png"
    );
    company_img.setAttribute("class", "company-logo");

    image_left_container.append(company_img);

    let desc_left_container = document.createElement("div");

    let company = document.createElement("p");
    company.setAttribute("class", "company");
    company.innerText = el.company;

    let position = document.createElement("p");
    position.setAttribute("class", "position");
    position.innerText = el.position;

    let posted_details = document.createElement("div");
    posted_details.setAttribute("class", "post-details");

    let postedAt = document.createElement("p");
    postedAt.innerText = el.postedAt;

    let contract = document.createElement("p");
    contract.innerText = el.contract;

    let location = document.createElement("p");
    location.innerText = el.location;

    posted_details.append(postedAt, contract, location);
    desc_left_container.append(company, position, posted_details);
    left_container.append(image_left_container, desc_left_container);

    let right_container = document.createElement("div");
    right_container.setAttribute("class", "right-container");

    let role = document.createElement("p");
    role.innerText = el.role;

    let level = document.createElement("p");
    level.innerText = el.level;

    let language = document.createElement("p");
    language.innerText = el.language;

    right_container.append(role, level, language);

    container.append(left_container, right_container);

    root.append(container);
  });
}

let filter_role = document.getElementById("role-filter");
filter_role.addEventListener("change", filterData);

let search_lang = document.getElementById("search-lang");
search_lang.addEventListener("input", searchData);

// Filter functionality based on role
function filterData() {
  let filterQuery = filter_role.value;
  filterQuery = filterQuery.toLowerCase();

  if (filterQuery == "none") {
    fileredData = data;
  } else {
    fileredData = fileredData.filter((el) => {
      let role = el.role.toLowerCase();
      return role == filterQuery;
    });
  }
  renderPagination(fileredData);
}

// Search Functionality based on languages
function searchData() {
  let searchQuery = search_lang.value;
  searchQuery = searchQuery.toLowerCase();

  if (searchQuery == "") {
    fileredData = fileredData;
  } else {
    fileredData = fileredData.filter((el) => {
      let lang = el.language.toLowerCase();
      return lang.includes(searchQuery);
    });
  }
  renderPagination(fileredData);
}
