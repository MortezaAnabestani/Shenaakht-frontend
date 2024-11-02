import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default AppRouter;
