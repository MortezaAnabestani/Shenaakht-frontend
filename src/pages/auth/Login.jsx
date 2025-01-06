import React from "react";
import styles from "../../styles/auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import Loading from "../../components/other/Loading";
import { useDispatch, useSelector } from "react-redux";
import { sendLoginDataToServer } from "../../services/authAPI";
import AuthErrorHandler from "../../errorHandler/AuthErorrHandler";
import { setEmail, setPassword, setShowPass } from "../../features/authSlice/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, showPass, data, loading, error } = useSelector((state) => state.login);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(sendLoginDataToServer({ email, password }));
  };

  if (data) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          {loading && <Loading />}
          {data && (
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
                      dispatch(setEmail(e.target.value));
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
                      dispatch(setPassword(e.target.value));
                    }}
                    dir="ltr"
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 me-3"
                    onClick={() => {
                      dispatch(setShowPass(!showPass));
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
                {error && <AuthErrorHandler error={error} />}
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
