import React from "react";
import sub_Styles from "../../../styles/home/homeFeaturedSectionsHead.module.css";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import SliderCards from "../card/SliderCards";
import styles from "../../../styles/home/featuredMainItems.module.css";

const FeaturedMainItems = ({ testContent }) => {
  const numberOfCards = 4;
  /* choosing sections */
  const sections = {
    pollsContent_test: { path: "/polls", title: "نظرسنجی‌ها" },
    articleContent_test: { path: "/articles", title: "مقاله‌ها" },
  };

  return (
    <div className={`col-12 col-md-9 d-flex flex-column ${styles.featuredMainItemsWrapper}`}>
      {testContent?.map((items, index) => {
        const sectionKey = Object.keys(sections).find((key) => items[key]);
        const section = sectionKey ? sections[sectionKey] : null;
        if (!section) return null;
        return (
          <div key={index}>
            <div className={sub_Styles.homeSectionsHead}>
              <h6>{section?.title}</h6>
              <img src="./assets/images/lines/barline.svg" alt="bar line" />
              <Link to={`${section?.path}`} className={`btn btn-sm ${sub_Styles.readMore} btn-dark`}>
                مطالعۀ بیش‌تر
              </Link>
            </div>
            <div className={"album py-2 d-none d-md-block"}>
              <div className="container">
                <div className="row">
                  {items[sectionKey]?.map(
                    (item, index) =>
                      index <= numberOfCards - 1 && <Card key={index} {...item} mainRoute={section.path} />
                  )}
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <SliderCards items={items[sectionKey]} numberOfCards={numberOfCards} mainRoute={section.path} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedMainItems;
