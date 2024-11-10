import React, { useRef, useState } from "react";
import styles from "../../styles/content/contentDetails.module.css";

const CopyPathBtn = ({ content }) => {
  const copyInputRef = useRef(null);
  const [buttonText, setButtonText] = useState("کپی پیوند");

  const copyHandler = () => {
    const copyText = copyInputRef.current;

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        setButtonText("!انجام شد");
      })
      .catch((err) => {
        console.error("رونوشت ناموفق بود", err);
      });
  };

  return (
    <div className={styles.copyPathWrapper}>
      <input
        className={styles.copyPathInput}
        type="text"
        value={`https://shenaakht.com/${content.slug}-${content._id.$oid}`}
        id="copyPath"
        ref={copyInputRef}
        readOnly
      />
      <button className={styles.copyPathBtn} onClick={copyHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default CopyPathBtn;
