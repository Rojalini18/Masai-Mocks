import axios from "axios";
export const LOGIN = "LOGIN";

const TeaherLogin = (details) => ({
  type: LOGIN,
  payload: details,
});

export const TeacherRegistration = (payload, alert, navigate) => (dispatch) => {
  console.log(payload.mail);
  axios
    .post("https://masai-mock12.herokuapp.com/signup", payload)
    .then((res) => {
      console.log(res);
      if (res.data.message === "user created") {
        alert.success("SignIn Successfully");
        navigate("/login");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const UserLogin = (payload, alert, navigate) => (dispatch) => {
  console.log(payload);
  axios
    .post("https://masai-mock12.herokuapp.com/login", payload)
    .then((res) => {
      console.log(res);
      if (res.data.message === "Invalid Credentials") {
        alert.error("Invalid Credentials");
      }
      if (res.data.message === "New User") {
        alert.show("You Dont Have Account Pls register");
      }
      if (res.data.message === "login success") {
        let isLogin = true;
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("token", res.data.refreshToken);
        localStorage.setItem("isLogin", isLogin);
        dispatch(TeaherLogin(res.data));
        navigate("/home");
        setTimeout(() => {
          window.location.reload();
        });
        alert.success("login success");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
