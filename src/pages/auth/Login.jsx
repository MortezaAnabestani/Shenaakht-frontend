import React, { useState } from "react";
import styles from "../../styles/auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [validationErrors, setValidationErrors] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      alert(response);
      setShowSuccessMessage(true);
      setValidationErrors(null);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          {showSuccessMessage && (
            <div className="alert alert-success mt-2 text-center" role="alert">
              <p className="pt-2">ورود شما با موفقیت انجام شد</p>
            </div>
          )}
          <div className="card card-default">
            <div className="card-header text-center">
              <h6 className="pt-2">ورود به حساب</h6>
            </div>
            <div className={`card-body ${styles.authWrapper}`}>
              <form
                onSubmit={loginHandler}
                className="form-horizontal"
                method="POST"
                action="/auth/login"
                noValidate
              >
                <div className="form-group mb-2">
                  <label htmlFor="email" className="control-label">
                    آدرس ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    dir="ltr"
                    required
                  />
                </div>
                <div className="form-group mb-2 position-relative">
                  <label htmlFor="password" className="control-label">
                    رمز عبور
                  </label>
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    dir="ltr"
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 me-3"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {showPass ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input id="remember" type="checkbox" className="checkbox" name="remember" />
                  <label> مرا به‌خاطر بسِپار</label>
                </div>
                {validationErrors && (
                  <div className="mt-2 p-2">
                    {Object?.keys(validationErrors)?.map((key) => {
                      if (typeof validationErrors[key] === "object") {
                        return Object.values(
                          validationErrors[key]?.map((error) => (
                            <p style={{ fontSize: "12px", color: "red" }} key={error}>
                              <span>
                                <img
                                  className="ms-1"
                                  src="/assets/images/icons/warning_icon.png"
                                  alt="warning icon"
                                  width="18px"
                                />
                              </span>
                              {error}
                            </p>
                          ))
                        );
                      }
                      return (
                        <p style={{ fontSize: "12px", color: "red" }} key={key}>
                          <span>
                            <img
                              className="ms-1"
                              src="/assets/images/icons/warning_icon.png"
                              alt="warning icon"
                              width="18px"
                            />
                          </span>
                          {validationErrors[key]}
                        </p>
                      );
                    })}
                  </div>
                )}
                <div className={`form-group mb-2 ${styles.forgottenLink}`}>
                  <Link to="/auth/password/reset">یادم تو را فراموش؟</Link>
                  <img src="/assets/images/icons/forgotten.png" alt="icon for forgotten password" />
                </div>
                <div className="form-group mb-4">ریکپچا</div>
                <div className="form-group mb-5 d-flex align-items-center justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-sm ms-2 rounded-4"
                    style={{ backgroundColor: "#FFCB05", fontSize: "13px" }}
                  >
                    ورود
                  </button>
                  <Link to="/auth/google" style={{ backgroundColor: "#2E2E2E", color: "white" }}>
                    ورود با حساب گوگل
                  </Link>
                </div>
              </form>
              <div className={`form-group mt-1 mb-1 text-center ${styles.lastElementLogin}`}>
                <span className="d-flex align-items-center">
                  <label>نه‌شناختی؟</label>
                  <img src="/assets/images/lines/left-arrow1.svg" alt="left arrow icon" />
                  <Link to="/auth/register">به ما بپیوندید</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
