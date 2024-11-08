import React from "react";
import styles from "../../styles/auth/signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card card-default">
            <div className="card-header text-center">
              <h5>اهل شناخت شوید</h5>
            </div>

            <div class="card-body">
              <form class="form-horizontal" method="POST" action="/auth/register" novalidate>
                <div className="form-group mb-2">
                  <label for="name" className="control-label">
                    نام و نام خانوادگی
                  </label>
                  <input id="name" type="name" className="form-control" name="email" required />
                </div>
                <div className="form-group mb-2">
                  <label for="email" className="control-label">
                    آدرس ایمیل
                  </label>
                  <input id="email" type="email" className="form-control" name="email" required />
                </div>

                <div className="form-group mb-2">
                  <label for="mobile" className="control-label">
                    تلفن همراه
                  </label>
                  <input id="mobile" type="mobile" className="form-control" name="email" required />
                </div>
                <div className="form-group mb-2">
                  <label for="password" className="control-label">
                    رمز عبور
                  </label>
                  <input id="password" type="password" className="form-control" name="password" required />
                </div>

                <div className="form-group mb-4">ریکپچا</div>

                <div className="form-group mb-2 text-center">
                  <button type="submit" className="btn btn-sm ms-3" style={{ backgroundColor: "#FFCB05" }}>
                    ثبت‌نام
                  </button>
                  <Link
                    href="/auth/google"
                    className="btn btn-sm"
                    style={{ backgroundColor: "#2E2E2E", color: "white" }}
                  >
                    ورود با حساب گوگل
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

export default Signup;
