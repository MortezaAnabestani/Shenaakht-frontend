import React, { useState } from "react";
import styles from "../../styles/auth/auth.module.css";
import { Link } from "react-router-dom";
import PasswordValidation from "../../validation/auth/PasswordValidation";
import { Eye, EyeOff } from "react-feather";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [ValidationErrors, setValidationErrors] = useState(false);
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
              <h6 className="pt-2">اهل شناخت شوید</h6>
            </div>
            <div className={`card-body ${styles.authWrapper}`}>
              <form
                onSubmit={formHandler}
                className="form-horizontal"
                method="POST"
                action="/auth/register"
                novalidate
              >
                <div className="form-group mb-2">
                  <label htmlFor="name" className="control-label">
                    * نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    type="name"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="محمدرضا شجریان"
                    required
                  />
                </div>
                <div className={`form-group mb-2 ${styles.leftInput}`}>
                  <label htmlFor="email" className="control-label">
                    * آدرس ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="mohamadreza_shajarian@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={`form-group mb-2 ${styles.leftInput}`}>
                  <label htmlFor="mobile" className="control-label">
                    * تلفن همراه
                  </label>
                  <input
                    id="mobile"
                    type="mobile"
                    className="form-control"
                    name="email"
                    placeholder="۰۹۱۵-۱۲۳۴۵۶۷"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className={`form-group mb-2 position-relative ${styles.leftInput}`}>
                  <label htmlFor="password" className="control-label">
                    * رمز عبور
                  </label>
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    className="form-control"
                    name="password"
                    placeholder="mo@Sh1319"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={() => {
                      setIsPasswordFocused(true);
                      setValidationErrors(true);
                    }}
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
                  {isPasswordFocused && <PasswordValidation password={password} />}
                </div>

                <div className="form-group mb-4">ریکپچا</div>

                <div className="form-group mb-5 text-center">
                  <Link type="submit" className="btn btn-sm ms-3" style={{ backgroundColor: "#FFCB05" }}>
                    ثبت‌نام
                  </Link>
                  <Link
                    href="/auth/google"
                    className="btn btn-sm"
                    style={{ backgroundColor: "#2E2E2E", color: "white" }}
                  >
                    ورود با Gmail
                  </Link>
                </div>
              </form>
              <div className={`form-group mt-2 mb-1 text-center ${styles.lastElementLogin}`}>
                <span className="d-flex align-items-center">
                  <label>اهل شناختم</label>
                  <img src="/assets/images/lines/left-arrow1.svg" alt="left arrow icon" />
                  <Link to="/auth/login">صفحۀ ورود</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
