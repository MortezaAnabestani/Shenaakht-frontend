import React from "react";
import styles from "../../styles/auth/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordValidation from "../../utils/auth/PasswordValidation";
import { Eye, EyeOff } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { sendRegisterDataToServer } from "../../services/authAPI";
import Loading from "../../components/other/Loading";
import AuthErrorHandler from "../../errorHandler/AuthErorrHandler";
import {
  setName,
  setEmail,
  setMobile,
  setPassword,
  setIsPasswordFocused,
  setShowPass,
} from "../../features/authSlice/signupSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email, mobile, password, isPasswordFocused, showPass, data, loading, error } = useSelector(
    (state) => state.register
  );

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(sendRegisterDataToServer({ name, email, mobile, password }));
  };

  if (data) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="container mt-4">
      {loading && <Loading />}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          {data && (
            <div className="alert alert-success mt-2 text-center" role="alert">
              <p className="pt-2"> ثبت‌نام شما با موفقیت انجام شد</p>
            </div>
          )}
          <div className="card card-default">
            <div className="card-header text-center">
              <h6 className="pt-2">اهل شناخت شوید</h6>
            </div>
            <div className={`card-body ${styles.authWrapper}`}>
              <form
                onSubmit={registerHandler}
                className="form-horizontal"
                method="POST"
                action="/api/register"
                noValidate
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
                    onChange={(e) => dispatch(setName(e.target.value))}
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
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                  />
                </div>

                <div className={`form-group mb-2 ${styles.leftInput}`}>
                  <label htmlFor="mobile" className="control-label">
                    * تلفن همراه
                  </label>
                  <input
                    id="mobile"
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder="۰۹۱۵۱۲۳۴۵۶۷"
                    required
                    value={mobile}
                    onChange={(e) => dispatch(setMobile(e.target.value))}
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
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    onKeyDown={() => {
                      dispatch(setIsPasswordFocused(true));
                    }}
                    onMouseOut={() => {
                      dispatch(setIsPasswordFocused(false));
                    }}
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
                  {isPasswordFocused && <PasswordValidation password={password} />}
                </div>
                {error && <AuthErrorHandler error={error} />}
                <div className="form-group mb-4">ریکپچا</div>
                <div className="form-group mb-5 text-center">
                  <button
                    type="submit"
                    className="btn btn-sm ms-3 rounded-5"
                    style={{ backgroundColor: "#FFCB05" }}
                  >
                    ثبت‌نام
                  </button>
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
