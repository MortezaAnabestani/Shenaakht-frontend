import React, { useState } from "react";
import styles from "../../styles/auth/auth.module.css";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card card-default">
            <div className="card-header text-center">
              <h6 className="pt-2">ورود به حساب</h6>
            </div>
            <div className={`card-body ${styles.authWrapper}`}>
              <form
                onSubmit={formHandler}
                className="form-horizontal"
                method="POST"
                action="/auth/login"
                novalidate
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
                    className="form-control text-start"
                    value={password}
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
                <div className={`form-group mb-2 ${styles.forgottenLink}`}>
                  <Link to="/auth/password/reset">یادم تو را فراموش؟</Link>
                  <img src="/assets/images/icons/forgotten.png" alt="icon for forgotten password" />
                </div>
                <div className="form-group mb-3 d-flex align-items-center">
                  <input id="remember" type="checkbox" className="checkbox" name="remember" />
                  <label> مرا به‌خاطر بسِپار</label>
                </div>
                <div className="form-group mb-4">ریکپچا</div>
                <div className="form-group mb-5  text-center">
                  <Link type="submit" className="ms-2" style={{ backgroundColor: "#FFCB05" }}>
                    ورود
                  </Link>
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
