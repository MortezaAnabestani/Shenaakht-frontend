import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";

const ContentType = ({ contentType, setContentType }) => {
  const contentTypeNames = [
    { _id: 1, name: "article", persianName: "مقاله" },
    { _id: 2, name: "poll", persianName: "نظرسنجی" },
    { _id: 3, name: "data", persianName: "داده‌های آماری" },
    { _id: 4, name: "news", persianName: "خبر" },
  ];

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
        onChange={(e) => setContentType(e.target.value)}
        required
      >
        <option value={""} disabled>
          انتخاب نوع محتوا
        </option>
        {contentTypeNames?.map((type) => (
          <option key={type._id} value={type.name}>
            {type.persianName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContentType;
