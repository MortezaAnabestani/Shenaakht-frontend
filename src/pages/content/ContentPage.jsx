import React from "react";
import styles from "../../styles/content/contentList.module.css";
import sub_styles from "../../styles/card/reportsCard.module.css";
import Card from "../../components/card/Card.jsx";
import InfoSearchBox from "../../components/other/InfoSearchBox.jsx";
import { useParams } from "react-router";

//test
import pollsContent from "../../testContent/pollscontent_test.js";
import articleContent from "../../testContent/articlecontent_test.js";
import reportContent from "../../testContent/reportcontent_test.js";
import datafilesContent from "../../testContent/datacontent_test.js";
import ReportsCard from "../../components/card/ReportsCard.jsx";

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
    <div className={sub_styles.reportsWrapper}>
      <img src="/assets/images/icons/attachment.png" alt="attachment icon" />
      <ul>
        {testContent?.map((report, index) => (
          <ReportsCard report={report} key={index} />
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
