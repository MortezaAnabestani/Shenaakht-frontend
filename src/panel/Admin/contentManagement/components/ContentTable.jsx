import axios from "axios";
import React from "react";
import styles from "../../../../styles/panel/admin/sidebar.module.css";
import moment from "moment-jalaali";
import { setSearchTerm } from "../../../../features/contents/createContentSlice";
import { setShowModal, setDeletedItemId } from "../../../../features/contents/deleteContentSlice";
import { fetchContentData } from "../../../../services/contentAPI";
// import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import ModalAlert from "./ModalAlert";
import { useDispatch, useSelector } from "react-redux";

const ContentTable = ({ data, onPageChange, currentPage }) => {
  const dispatch = useDispatch();
  const { showModal, deletedItemId } = useSelector((state) => state.deleteContent);
  const { searchTerm } = useSelector((state) => state.createContent);
  const itemsPerPage = 10;

  const filteredData = data?.filter(
    (item) => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = ({ selected }) => {
    onPageChange({ selected });
  };

  const paginatedData = filteredData?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleDelete = (id) => {
    dispatch(setDeletedItemId(id));
    dispatch(setShowModal(true));
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/contentsList/${deletedItemId}`);
      dispatch(fetchContentData((prevData) => prevData.filter((item) => item._id !== deletedItemId)));
      dispatch(setDeletedItemId(null));
      dispatch(setShowModal(false));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  function formatDate(dateTimeString) {
    moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
    const persianTime = moment(dateTimeString).format("jD jMMMM jYYYY");
    return persianTime;
  }

  return (
    <div>
      {showModal && <ModalAlert setShowModal={setShowModal} confirmDelete={confirmDelete} />}
      <div>
        <div className="d-flex flex-column-reverse flex-md-row col-12 justify-content-between align-items-center">
          <div className="position-relative mb-2 col-12 col-md-8">
            <input
              type="text"
              placeholder="برای جستجو، بخشی از عنوان مدنظر خود را وارد کنید..."
              className="border p-2 rounded-2 fs-9 w-100"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
            <img
              src="/assets/images/icons/searchIcon.svg"
              alt="search icon"
              width={"20px"}
              className={`position-absolute mt-0 ${searchTerm && styles.arrowIcon}`}
              style={{ top: "10px", left: "10px", rotate: "0deg" }}
            />
          </div>
          <div className="col-8 col-md-3">
            <Link to={`/auth/admin/content-management/create`}>
              <button className="btn btn-sm btn-success mb-2 p-2 rounded-2 fs-9 w-100">
                ایجاد محتوای جدید
              </button>
            </Link>
          </div>
        </div>
        <div className="table-container">
          <table className="table bg-white table-bordered d-none d-lg-table mt-3">
            <thead>
              <tr className="fs-9 text-center">
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light">عنوان</th>
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light">نوع </th>
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light">موضوع</th>
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light">برچسب‌ها</th>
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light"> انتشار</th>
                <th className="py-2 px-4 fw-light fs-10 bg-secondary text-light">عملیات‌ها</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((item) => (
                <tr key={item.id} className="fs-9">
                  <td className="fw-bolder">{item.title}</td>
                  <td className="fs-10">{item.contentType.name}</td>
                  <td className="fs-10">{item.categories.name}</td>
                  <td>
                    {item.tags?.map((tag) => (
                      <span key={tag._id} className="badge text-muted">
                        {tag.name}
                      </span>
                    ))}
                  </td>
                  <td className="fs-10">{formatDate(item.createdAt)}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Link to={`/auth/admin/content-management/edit/${item._id}`} className=" fs-11">
                        <img src="/assets/images/icons/editIcon_golden.svg" alt="edit icon" width={"20px"} />
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="border-0 bg-transparent fs-11"
                      >
                        <img src="/assets/images/icons/deleteIcon.svg" alt="delete icon" width={"20px"} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* نسخه کارت برای موبایل */}
          <div className="d-lg-none mt-3">
            {paginatedData?.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm " style={{ lineHeight: "40px" }}>
                <div className="card-body">
                  <h6 className="card-title mb-2 text-center border-bottom fw-bolder pb-3 px-3">
                    {item.title}
                  </h6>
                  <p className="card-text mb-1">
                    <strong className="fs-9">نوع محتوا: </strong>
                    <span className="bg-shenaakht_color2 fw-light rounded-1 text-white px-3 fs-8">
                      {item.contentType.name}
                    </span>
                  </p>
                  <p className="card-text mb-1">
                    <strong className="fs-9">موضوع: </strong>
                    <span className="bg-shenaakht_color2 fw-light rounded-1 text-white px-3 fs-8">
                      {item.categories.name}
                    </span>
                  </p>
                  <p className="card-text mb-1">
                    <strong className="fs-9">تاریخ انتشار: </strong>
                    <span className="bg-shenaakht_color2 fw-light rounded-1 text-white px-3 fs-8">
                      {formatDate(item.createdAt)}
                    </span>
                  </p>
                  <p className="card-text mb-1">
                    <strong className="fs-9">برچسب‌ها: </strong>
                    {item.tags?.map((tag) => (
                      <span
                        key={tag._id}
                        className="badge bg-shenaakht_color2 fw-light rounded-1 text-white me-1"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <Link
                      to={`/auth/admin/content-management/edit/${item._id}`}
                      className="btn btn-sm bg-shenaakht_color1"
                    >
                      ویرایش
                    </Link>
                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-danger">
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Pagination pageCount={pageCount} onPageChange={handlePageChange} /> */}
    </div>
  );
};

export default ContentTable;
