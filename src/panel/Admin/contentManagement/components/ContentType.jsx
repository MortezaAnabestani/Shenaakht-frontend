import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentTypes } from "../../../../services/contentAPI";
import styles from "../../../../styles/panel/admin/admin.module.css";

const ContentType = ({ contentType, setFormData }) => {
  const dispatch = useDispatch();
  const { dataContentType } = useSelector((state) => state.readContent);

  useEffect(() => {
    dispatch(fetchContentTypes());
  }, [dispatch]);

  return (
    <div className={styles.createContent_title}>
      <label className="fs-10 mb-0" htmlFor="contentType">
        نوع محتوا:
      </label>
      <select
        id="contentType"
        className="cursor-pointer"
        name="contentType"
        value={contentType ? contentType : ""}
        onChange={(e) => dispatch(setFormData({ contentType: e.target.value }))}
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
