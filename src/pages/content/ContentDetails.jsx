import React from "react";
import styles from "../../styles/content/contentDetails.module.css";
import MediaIconPart from "../../components/other/MediaIconPart.jsx";
import SliderCards from "../../components/card/SliderCards";
import moment from "moment-jalaali";
import { useParams } from "react-router";

//test
import pollsContent from "../../testContent/pollscontent_test.js";
import articleContent from "../../testContent/articlecontent_test.js";
import reportContent from "../../testContent/reportcontent_test.js";
import datafilesContent from "../../testContent/datacontent_test.js";
import CopyPathBtn from "../../components/other/CopyPathBtn.jsx";

const ContentDetails = () => {
  const { type, id } = useParams();

  let content;
  if (type === "articles") {
    content = articleContent?.find((item) => `${item.slug}-${item._id?.$oid || item._id}` === id);
  } else if (type === "polls") {
    content = pollsContent?.find((item) => `${item.slug}-${item._id?.$oid || item._id}` === id);
  } else if (type === "reports") {
    content = reportContent?.find((item) => `${item.slug}-${item._id?.$oid || item._id}` === id);
  } else if (type === "datafiles") {
    content = datafilesContent?.find((item) => `${item.slug}-${item._id?.$oid || item._id}` === id);
  }

  return (
    <main className={`container ${styles.contentWrapper}`}>
      <div
        className={`${styles.contentHead} d-flex flex-column flex-sm-row justify-content-between align-items-center`}
      >
        <div className={styles.contentHead_right}>
          <p>
            <span> ارسال‌شده در</span>
            {moment(content.createdAt?.$date || content.createdAt, "YYYY/MM/DD")
              .locale("fa")
              .format("jD jMMMM jYYYY")}
          </p>

          <h5 className="fw-bold">{content.title}</h5>
        </div>
        <MediaIconPart />
      </div>
      <div className={`row ${styles.contentBody}`}>
        <div className="col-lg-12 pt-4">
          {type === "reports" ? null : (
            <img src={content.images} alt={content.title} className={`imgshadow ${styles.bodyImage}`} />
          )}
          <p className="lh-lg">{content.body}</p>
        </div>

        {/* slider */}
        {/* <div className={styles.contentDetails_slider}>
          <SliderCards />
        </div> */}

        {/* copyPath  */}
        <CopyPathBtn content={content} />
        <div
          className={`${styles.contentBottom} d-flex flex-column flex-sm-row justify-content-between align-items-center`}
        >
          <p className={`${styles.contentHead_right} mt-2 mb-2`}>
            <span> ارسال‌شده در</span>
            {moment(content.createdAt?.$date || content.createdAt, "YYYY/MM/DD")
              .locale("fa")
              .format("jD jMMMM jYYYY")}
          </p>
          <MediaIconPart className="mt-2 mb-2" />
        </div>
      </div>
    </main>
  );
};

export default ContentDetails;
