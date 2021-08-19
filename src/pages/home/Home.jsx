import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <h1>Welcome to the test page of TechBase</h1>
        <h3>Sign up or use existing account to log in</h3>
        <div className="navigationButtons">
          <Link to="/register">
            <button className="homeRegisterButton">Create an Account</button>
          </Link>
          <Link to="/login">
            <button className="homeSignUpButton">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
