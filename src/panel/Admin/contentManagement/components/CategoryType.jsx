import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";

const CategoryType = ({ categoryType, setCategoryType }) => {
  const categoryTypeNames = [
    { _id: 1, name: "all", persianName: "همه" },
    { _id: 2, name: "politics", persianName: "سیاست" },
    { _id: 3, name: "society", persianName: "جامعه" },
    { _id: 4, name: "economics", persianName: "اقتصاد" },
    { _id: 5, name: "culture", persianName: "فرهنگ" },
    { _id: 6, name: "science", persianName: "علم" },
    { _id: 7, name: "technology", persianName: "فناوری" },
    { _id: 8, name: "health", persianName: "سلامت" },
    { _id: 9, name: "environment", persianName: "محیط زیست" },
    { _id: 10, name: "sports", persianName: "ورزشی" },
  ];
  return (
    <div className={styles.createContent_title}>
      <label className="fs-10" htmlFor="categoryType">
        دسته‌بندی محتوا:
      </label>
      <select
        id="categoryType"
        className="cursor-pointer"
        name="categoryType"
        value={categoryType}
        onChange={(e) => setCategoryType(e.target.value)}
        required
      >
        <option value={""} disabled>
          انتخاب دستۀ مناسب برای محتوا
        </option>
        {categoryTypeNames.map((category) => (
          <option key={category._id} value={category.name}>
            {category.persianName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryType;
