import React from "react";
import styles from "../../styles/card/reportsCard.module.css";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";

const ReportsCard = ({ report }) => {
  const id = report._id?.$oid || report._id;
  return (
    <li className={styles.reportItem}>
      <small>
        {moment(report.createdAt?.$date || report.createdAt, "YYYY/MM/DD")
          .locale("fa")
          .format("jD jMMMM jYYYY")}
      </small>
      <h5>{report.title}</h5>
      <p>
        {report.body.substring(0, 450)}
        <Link className="me-2" to={`${report.slug}-${id}`}>
          ادامۀ خبر
        </Link>
      </p>
    </li>
  );
};

export default ReportsCard;
