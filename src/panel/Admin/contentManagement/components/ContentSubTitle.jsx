import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSubTitleshow, setSubTitle } from "../../../../features/contents/createContentSlice";

const ContentSubTitle = ({ subTitle }) => {
  const dispatch = useDispatch();
  const { subTitleshow } = useSelector((state) => state.createContent);

  return (
    <>
      {subTitleshow ? (
        <div className="d-flex align-items-center me-1 mb-3">
          <img
            src="/assets/images/icons/panel/admin/arrowTurnLeftDown.svg"
            className="ms-2 cursor-pointer btn p-1 btn-sm btn-outline-info rounded-5"
            id="subTitleshow"
            name="subTitleshow"
            onClick={() => dispatch(setSubTitleshow(!subTitleshow))}
            alt="close icon"
            width={"25px"}
          />
          <span className="fs-11">می‌خواهم از زیرعنوان استفاده کنم</span>
        </div>
      ) : (
        <div className={`${styles.createContent_title}`}>
          <label className="fs-11" htmlFor="subTitle">
            زیر عنوان:
          </label>
          <input
            id="subTitle"
            name="subTitle"
            value={subTitle}
            type="text"
            onChange={(e) => dispatch(setSubTitle(e.target.value))}
          />
          <span className="d-flex fs-12 align-items-center mt-1 ">
            <img
              className="me-2 ms-1 cursor-pointer"
              src="/assets/images/icons/panel/admin/deleteIcon.svg"
              alt="delete icon"
              width="18px"
              onClick={() => dispatch(setSubTitleshow(!subTitleshow))}
            />
            حذف زیرعنوان
          </span>
        </div>
      )}
    </>
  );
};

export default ContentSubTitle;
