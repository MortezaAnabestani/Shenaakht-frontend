import React, { useEffect } from "react";
import ContentTable from "./components/ContentTable";
import Pagination from "./components/Pagination";
import styles from "../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentData } from "../../../services/contentAPI";
import Loading from "../../../components/other/Loading";
import { setCurrentPage, setTotalPages } from "../../../features/contents/createContentSlice";

const ContentList = () => {
  const dispatch = useDispatch();
  const { dataContent, loadingContent, errorContent } = useSelector((state) => state.readContent);
  const { currentPage, totalPages } = useSelector((state) => state.createContent);

  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchContentData({ currentPage, itemsPerPage }));
  }, [currentPage]);

  useEffect(() => {
    if (dataContent && dataContent.totalPages) {
      dispatch(setTotalPages(dataContent.totalPages));
    }
  }, [dataContent]);

  const handlePageChange = (selected) => {
    if (selected >= 0 && selected < totalPages) {
      dispatch(setCurrentPage(selected));
    }
  };

  return (
    <div className={styles.createContentWrapper}>
      {loadingContent && <Loading />}
      <div className={styles.formWrapper}>
        <div className="text-center">
          <img
            className="ms-2 mb-1"
            src="assets/images/icons/panel/admin/listIcon.svg"
            alt="pencil icon"
            width={"20px"}
          />
          فهرست محتواهای منتشرشده
        </div>
        {dataContent ? (
          <>
            <ContentTable data={dataContent.contents} currentPage={currentPage} />
            <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
          </>
        ) : (
          <p>هیچ داده‌ای یافت نشد.</p>
        )}
        {errorContent && <p className="text-danger">خطا: {errorContent}</p>}
      </div>
    </div>
  );
};

export default ContentList;
