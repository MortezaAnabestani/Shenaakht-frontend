import React from "react";
import styles from "../../styles/auth/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card card-default">
            <div className="card-header">
              <h5 classNameName="text-right">ورود به حساب</h5>
            </div>
            <div className="card-body">
              <form className="form-horizontal" method="POST" action="/auth/login" novalidate>
                <div className="form-group mb-2">
                  <label for="email" className="control-label">
                    آدرس ایمیل
                  </label>
                  <input id="email" type="email" className="form-control" name="email" required />
                </div>
                <div className="form-group mb-2">
                  <label for="password" className="control-label">
                    رمز عبور
                  </label>
                  <input id="password" type="password" className="form-control" name="password" required />
                </div>

                <div className="form-group mb-4">
                  <input id="remember" type="checkbox" className="checkbox" name="remember" /> مرا به‌خاطر
                  بسِپار
                </div>
                <div className="form-group mb-4">ریکپچا</div>
                <div className="form-group mb-4">
                  <button type="submit" className="btn btn-sm ms-3" style={{ backgroundColor: "#FFCB05" }}>
                    ورود
                  </button>
                  <Link
                    to="/auth/google"
                    className="btn btn-sm"
                    style={{ backgroundColor: "#2E2E2E", color: "white" }}
                  >
                    ورود با حساب گوگل
                  </Link>
                  <Link to="/auth/password/reset" className="btn btn-sm btn-link">
                    یادم تو را فراموش؟
                  </Link>
                </div>
                <div className="form-group mt-1 mb-1 text-center text-md-left">
                  <label>نه‌شناختی؟</label>
                  <Link
                    to="/auth/register"
                    className="btn btn-sm me-2"
                    style={{ backgroundColor: "#FFCB05" }}
                  >
                    به ما بپیوندید
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
