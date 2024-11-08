import React from "react";
import styles from "../../styles/content/contentList.module.css";
import Card from "../../components/card/Card.jsx";
import InfoSearchBox from "../../components/other/InfoSearchBox.jsx";
import { useParams } from "react-router";

//test
import pollsContent from "../../pollscontent_test.js";
import articleContent from "../../articlecontent_test.js";
import reportContent from "../../reportcontent_test.js";
import datafilesContent from "../../datacontent_test.js";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";

const ContentPage = () => {
  const { type } = useParams();

  const contentMap = {
    articles: articleContent,
    polls: pollsContent,
    reports: reportContent,
    datafiles: datafilesContent,
  };
  let testContent = contentMap[type] || null; // Default to null if type is not found

  const renderReports = () => (
    <div className={styles.reportsWrapper}>
      <img src="/assets/images/icons/attachment.png" alt="attachment icon" />
      <ul>
        {testContent?.map((report, index) => (
          <li key={index} className={styles.reportItem}>
            <small>
              {moment(report.createdAt?.$date || report.createdAt, "YYYY/MM/DD")
                .locale("fa")
                .format("jD jMMMM jYYYY")}
            </small>
            <h5>{report.title}</h5>
            <p>
              {report.body.substring(0, 450)}...{" "}
              <Link className="me-2" to={`${report._id}`}>
                ادامۀ خبر
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderCards = () => (
    <>
      {testContent?.map((item) => (
        <Card {...item} key={item.id} type={type} />
      ))}
    </>
  );

  return (
    <main className={`mt-4 mb-5 ${styles.contentListWrapper}`}>
      <InfoSearchBox />
      <div className={`${styles.contentListHead} d-flex flex-column align-items-center`}>
        <img
          src={
            type === "reports" ? "/assets/images/icons/newsPaper.svg" : "/assets/images/icons/title_icon.svg"
          }
          alt="an icon for title"
        />
        <h6>
          {type === "articles"
            ? "مقاله‌ها"
            : type === "polls"
            ? "نظرسنجی‌ها"
            : type === "reports"
            ? "پیش‌خوان اخبار"
            : "پرونده‌های آماری"}
        </h6>
      </div>
      <div className="album py-3 text-right">
        <div className="container">
          <div className="row row-gap-4">{type === "reports" ? renderReports() : renderCards()}</div>
        </div>
      </div>
    </main>
  );
};

export default ContentPage;
