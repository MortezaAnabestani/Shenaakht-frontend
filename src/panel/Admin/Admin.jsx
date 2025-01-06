import React, { useEffect, useState } from "react";
import styles from "../../styles/panel/admin/admin.module.css";
import Sidebar from "./Sidebar";
import { fetchAdminData } from "../../services/authAPI";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/other/Loading";
import { Outlet } from "react-router";

const Admin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminData());
  }, [dispatch]);

  return (
    <div className={`${styles.dashboardWrapper} ${menuOpen ? "d-flex flex-column flex-md-row" : "flex-row"}`}>
      {loading && <Loading />}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
    </div>
  );
};

export default Admin;
