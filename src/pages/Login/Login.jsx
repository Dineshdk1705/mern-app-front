import React, { useEffect, useState } from "react";
import "./Login.scss";
import bg from "../../images/footer-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../util";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email and password are required");
    }
    const url = `${process.env.DOMAIN_API_URL}/auth/login`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result);
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (error) {
        const details = error[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <form onSubmit={handleLogin}>
        <div className="login__container">
          <h2 className="login__container__title">Login</h2>
          <label className="login__container__label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter email..."
            autoFocus
            onChange={handleInputChange}
            value={loginInfo.email}
          />
          <label className="login__container__label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password..."
            onChange={handleInputChange}
            value={loginInfo.password}
          />
          <div className="login__container__btn_outer">
            <button type="submit" className="login__container__btn">
              Login
            </button>
          </div>
          <p className="login__container__suggestion">
            Don't have an account?
            <Link
              to="/signup"
              style={{
                color: "#1a5a95",
                fontWeight: 650,
                marginLeft: "0.4rem",
              }}
            >
              SignUp
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
