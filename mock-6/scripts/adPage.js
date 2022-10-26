let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const registerFormData = new FormData(registerForm);
  let brand = registerFormData.get("brand");
  let type = registerFormData.get("type");
  let year = registerFormData.get("year");
  let kms = registerFormData.get("km_driven");
  let Description = registerFormData.get("description");
  let Price = registerFormData.get("price");

  if (
    brand === "" ||
    type === "" ||
    year === "" ||
    kms === "" ||
    Description === "" ||
    Price === ""
  ) {
    alert("please fill the missing details");
  } else {
    let obj = {
      brand,
      type,
      year,
      kms,
      Description,
      Price,
    };

    let data = JSON.stringify(obj);
    let otpForm = document.getElementById("otpForm");
    otpForm.style.visibility = "visible";
    getOTP(data);
  }
});

function getOTP(data) {
  let otpForm = document.getElementById("otpForm");
  otpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const otpFormData = new FormData(otpForm);
    let data1 = otpFormData.get("data1");
    let data2 = otpFormData.get("data2");
    let data3 = otpFormData.get("data3");
    let data4 = otpFormData.get("data4");

    if (data1 === "" || data2 === "" || data3 === "" || data4 === "") {
      alert("please enter OTP correctly");
    } else if (data1 == "1" && data2 == "2" && data3 == "3" && data4 == "4") {
      alert("verified OTP");
      register(data);
    }
  });
}

function register(data) {
  fetch("https://json-server-mocker-app.herokuapp.com/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      alert("registered successfully");
      setTimeout(() => {
        window.location.href = "CarsPage.html";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
}
