import "./login.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Notification } from "../../components/Notification";

export const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [notificationStatus, setNotificationsStatus] = useState("");

  /* Check for the basic input validity */
  const valid = () => {
    if (!loginValue || !passwordValue) {
      setNotificationsStatus("Fill out both fields!")
      return false;
    }
    return true;
  };

  /* Handle the login event */
  const handleLogin = (e) => {
    e.preventDefault();
    if (valid()) {
      axios({
        method: "post",
        url: "login/",
        data: {
          login: loginValue,
          password: passwordValue,
        },
        headers: {
          "Content-Type": "application/json"
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
          <span className="loginDesc">Test page for login.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Login"
              className="loginInput"
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <input
              type="submit"
              value="Log in"
              className="loginRegisterButton"
            />
            <Link to="/register" className="registerLink">
              <button className="loginButton">Create a New Account</button>
            </Link>
            <Notification notificationStatus={notificationStatus} />
          </form>
        </div>
      </div>
    </div>
  );
};
