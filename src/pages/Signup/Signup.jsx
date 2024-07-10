import React, { useEffect, useState } from "react";
import "./Signup.scss";
import bg from "../../images/footer-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
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
    let copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleError("name, email and password are required");
    }
    const url = "https://mern-app-1-eta.vercel.app/auth/signup";
    console.log("url1 = ", url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signUpInfo),
      });
      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
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
    <div className="signup" style={{ backgroundImage: `url(${bg})` }}>
      <form onSubmit={handleSignUp}>
        <div className="signup__container">
          <h2 className="signup__container__title">SignUp</h2>
          <label className="signup__container__label">Name</label>
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="enter name..."
            onChange={handleInputChange}
            value={signUpInfo.name}
          />
          <label className="signup__container__label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter email..."
            onChange={handleInputChange}
            value={signUpInfo.email}
          />
          <label className="signup__container__label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password..."
            onChange={handleInputChange}
            value={signUpInfo.password}
          />
          <div className="signup__container__btn_outer">
            <button type="submit" className="signup__container__btn">
              SignUp
            </button>
          </div>
          <p className="signup__container__suggestion">
            Have an account?
            <Link
              to="/login"
              style={{
                color: "#1a5a95",
                fontWeight: 650,
                marginLeft: "0.4rem",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
