import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Notification } from "../../components/Notification";

export default function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [notificationStatus, setNotificationsStatus] = useState("");

  /* Check email validity */
  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  };

  /* Check for the registration validity */
  const valid = () => {
    if (!emailValue || !loginValue || !passwordValue || !passwordConfirmValue) {
      setNotificationsStatus("Fields can not be empty!")
      return false;
    }
    if (loginValue.length < 5 || passwordValue.length < 7) {
      setNotificationsStatus("Not enough character length in login or password!")
      return false;
    }
    if (passwordValue !== passwordConfirmValue) {
      setNotificationsStatus("Passwords do not match!")
      return false;
    }
    if (!isEmailValid(emailValue)) {
      setNotificationsStatus("Email is not valid!")
      return false;
    }
    return true;
  };

  /* Handle the Sign In event */
  const handleRegister = (e) => {
    e.preventDefault();
    if (valid()) {
      axios({
        method: "post",
        url: "register/",
        data: {
          login: loginValue,
          password: passwordValue,
          email: emailValue,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => setNotificationsStatus(`Request was successful with request code ${response.status}`))
        .catch((error) => setNotificationsStatus(`Request failed with status code ${error.response.status}`));
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">TechBase</h3>
          <span className="loginDesc">Test page for registration.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Login"
              className="loginInput"
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="loginInput"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="loginInput"
              value={passwordConfirmValue}
              onChange={(e) => setPasswordConfirmValue(e.target.value )}
            />
            <input className="loginButton" type="submit" value="Sign Up" />
            <Link to="/login" className="loginRegisterLink">
              <button className="loginRegisterButton">
                Log Into Existing Account
              </button>
            </Link>
            <Notification notificationStatus={notificationStatus}/>
          </form>       
        </div>
      </div>
    </div>
  );
}
