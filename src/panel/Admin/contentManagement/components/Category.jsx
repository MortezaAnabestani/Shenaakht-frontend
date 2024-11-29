import React, { useEffect, useState } from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../services/contentAPI";
import { setCategoryType } from "../../../../features/contents/createContentSlice";
import Loading from "../../../../components/other/Loading";

const CategoryType = ({ categoryType }) => {
  const dispatch = useDispatch();
  const { dataCategory, loadingCategory, errorCategory } = useSelector((state) => state.createContent);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.createContent_title}>
      {loadingCategory && <Loading />}
      <label className="fs-10" htmlFor="categoryType">
        دسته‌بندی محتوا:
      </label>
      <select
        id="categoryType"
        className="cursor-pointer"
        name="categoryType"
        value={categoryType}
        onChange={(e) => dispatch(setCategoryType(e.target.value))}
        required
      >
        <option value={""} disabled>
          انتخاب دستۀ مناسب برای محتوا
        </option>
        {dataCategory?.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      {errorCategory && <p className="text-danger">{errorCategory.message}</p>}
    </div>
  );
};

export default CategoryType;
