import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import CreateContent from "./contentManagement/CreateContent";

const Main = () => {
  return (
    <div className="w-100">
      <Header />
      <div className="d-flex align-items-center justify-content-center mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
