import React from "react";
import FeaturedMainItems from "./FeaturedMainItems";
import FeaturedReports from "./FeaturedReports";
import pollsContent_test from "../../../pollscontent_test.js";
import articleContent_test from "../../../articlecontent_test.js";
import reportcontent_test from "../../../reportcontent_test.js";

const FeaturedMain = () => {
  const testContent = [{ pollsContent_test }, { articleContent_test }];

  return (
    <div className="row">
      <FeaturedMainItems className="col-12 col-md-9" testContent={testContent} />
      <FeaturedReports className="col-12 col-md-3" testContent={reportcontent_test} />
    </div>
  );
};

export default FeaturedMain;
