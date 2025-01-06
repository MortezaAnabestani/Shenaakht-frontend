import React, { useEffect, useState } from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../services/contentAPI";
import Loading from "../../../../components/other/Loading";

const Category = ({ categories, setFormData }) => {
  const dispatch = useDispatch();
  const { dataCategory, loadingCategory, errorCategory } = useSelector((state) => state.readContent);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [categories]);

  return (
    <div className={styles.createContent_title}>
      <label className="fs-10 mb-0" htmlFor="categories">
        دسته‌بندی محتوا:
      </label>
      {loadingCategory && <Loading />}
      <select
        id="categories"
        className="cursor-pointer"
        name="categories"
        value={categories ? categories : ""}
        onChange={(e) => dispatch(setFormData({ categories: e.target.value }))}
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

export default Category;
