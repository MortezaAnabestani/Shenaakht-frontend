import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import NotFound from "../components/other/NotFound";
import Main from "../components/home/Main";
import MarketHome from "../pages/market/MarketHome";
import MarketDetails from "../pages/market/MarketDetails";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ArticlesList from "../pages/article/ArticlesList";
import ArticleDetail from "../pages/article/ArticleDetail";
import DataFilesList from "../pages/dataFile/DataFilesList";
import DataFileDetail from "../pages/dataFile/DataFileDetail";
import PollsList from "../pages/poll/PollsList";
import PollDetail from "../pages/poll/PollDetail";
import ReportsList from "../pages/report/ReportsList";
import ReportDetail from "../pages/report/ReportDetail";
import AdvancedSearch from "../pages/search/AdvancedSearch";
import AboutUs from "../pages/us/AboutUs";
import ContactUs from "../pages/us/ContactUs";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/market",
        element: <MarketHome />,
      },
      {
        path: "/market/:id",
        element: <MarketDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/articles",
        element: <ArticlesList />,
      },
      {
        path: "/article/:id",
        element: <ArticleDetail />,
      },
      {
        path: "/dataFiles",
        element: <DataFilesList />,
      },
      {
        path: "/dataFile/:id",
        element: <DataFileDetail />,
      },
      {
        path: "/polls",
        element: <PollsList />,
      },
      {
        path: "/poll/:id",
        element: <PollDetail />,
      },
      {
        path: "/reports",
        element: <ReportsList />,
      },
      {
        path: "/report/:id",
        element: <ReportDetail />,
      },
      {
        path: "/advancedSearch",
        element: <AdvancedSearch />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
