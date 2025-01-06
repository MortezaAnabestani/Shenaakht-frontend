import React from "react";
import styles from "../../styles/search/infoSearchBox.module.css";
import { Link } from "react-router-dom";

const InfoSearchBox = () => {
  return (
    <div className={`container text-right ${styles.infoFilter}`}>
      <div className="col-12 mb-4 mt-4">
        <div className="card mb-4 wow fadeIn">
          <h5 className="card-header">فیلترکردن اطلاعات</h5>
          <div className="card-body d-flex flex-column">
            <form method="GET" className={styles.searchBox}>
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                  className="form-control my-0 py-1 red-borde"
                  type="text"
                  placeholder="مقاله مدنظر خود را جستجو کنید"
                  aria-label="Search"
                  name="search"
                />
                <div className="input-group-append">
                  <button type="submit" className="input-group-text red lighten-3" id="basic-text1">
                    جستجو کنید
                  </button>
                </div>
              </div>
            </form>
            <form method="GET" action="/articles" className="form-horizontal">
              <div className={`form-group ${styles.selectInput}`}>
                <select name="type" id="type" className={"form-control"}>
                  <option value="all">همه</option>
                  <option value="all">سیاست</option>
                  <option value="all">جامعه</option>
                  <option value="all">اقتصاد</option>
                  <option value="all">فرهنک</option>
                  <option value="all">علم و تکنولوژی</option>
                  <option value="all">سلامت</option>
                  <option value="all">محیط‌زیست</option>
                  <option value="all">اینفوگرافی</option>
                </select>
                <img src="assets/images/lines/down-arrow.svg" alt="down arrow" className={styles.downArrow} />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="mt-4 d-flex" style={{ fontSize: "10px" }}>
                  <input type="checkbox" id="remember" className="checkbox ms-2" name="old" value="1" />
                  وارونه‌سازی تاریخی مطالب
                </span>
                <div className="form-group mt-2 align-self-start">
                  <button type="submit" className="btn btn-sm btn-secondary ms-2">
                    فیلتر
                  </button>
                  <Link to="/articles" className="btn btn-sm btn-warning">
                    حذف
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSearchBox;
