import React from "react";
import styles from "../../../styles/home/featuredReports.module.css";
import sub_Styles from "../../../styles/home/homeFeaturedSectionsHead.module.css";
import { Link } from "react-router-dom";
import fontSizes from "../../../styles/fontSizes/fontSizes.module.css";

const FeaturedReports = ({ testContent }) => {
  const numberOfReports = -20;

  return (
    <div className={`col-12 col-md-3 d-flex flex-column ${styles.reportBodyWrapper}`}>
      <div className={sub_Styles.homeSectionsHead}>
        <img src="/assets/images/lines/barline.svg" alt="brline" style={{ width: "22%" }} />
        <h6>
          <Link to={"/reports"}>پیشخوان اخبار</Link>
        </h6>
        <img src="/assets/images/lines/barline.svg" alt="brline" style={{ width: "22%" }} />
      </div>
      <div className={`column ${styles.reportBody} mt-2`}>
        <div className="col-12 p-0">
          <div className="list-group advanced-news-column">
            {testContent.slice(numberOfReports).map((report, index) => {
              const { title, body, _id, slug } = report;
              const id = _id?.$oid || _id;
              return (
                <Link
                  key={index}
                  to={`reports/${slug}-${id}`}
                  className="list-group-item list-group-item-action pe-1 pt-2"
                >
                  <div className="d-flex w-100">
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h5 className={`mb-1 ${fontSizes.px11}`}>{title}</h5>
                      </div>
                      <p className={`mb-1 text-muted small ${fontSizes.px8}`}>{body.substring(0, 85)}...</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReports;
