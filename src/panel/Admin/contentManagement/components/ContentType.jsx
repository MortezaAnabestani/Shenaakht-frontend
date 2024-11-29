import React, { useEffect, useState } from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentTypes } from "../../../../services/contentAPI";
import { setContentType } from "../../../../features/contents/createContentSlice";

const ContentType = ({ contentType }) => {
  const dispatch = useDispatch();
  const { dataContentType, loadingContentType, errorContentType } = useSelector(
    (state) => state.createContent
  );

  useEffect(() => {
    dispatch(fetchContentTypes());
  }, [dispatch]);

  return (
    <div className={styles.createContent_title}>
      <label className="fs-10" htmlFor="contentType">
        نوع محتوا:
      </label>
      <select
        id="contentType"
        className="cursor-pointer"
        name="contentType"
        value={contentType}
        onChange={(e) => dispatch(setContentType(e.target.value))}
        required
      >
        <option value={""} disabled>
          انتخاب نوع محتوا
        </option>
        {dataContentType?.map((type) => (
          <option key={type._id} value={type._id}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContentType;
