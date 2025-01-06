import { createBrowserRouter } from "react-router-dom";
import PublicRoot from "../pages/root/PublicRoot.jsx";
import PrivateRoot from "../pages/root/PrivateRoot";
import NotFound from "../components/other/NotFound";
import Home from "../components/home/Home";
import MarketHome from "../pages/market/MarketHome";
import MarketDetails from "../pages/market/MarketDetails";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AdvancedSearch from "../pages/search/AdvancedSearch";
import AboutUs from "../pages/us/AboutUs";
import ContactUs from "../pages/us/ContactUs";
import ContentDetails from "../pages/content/ContentDetails";
import ContentPage from "../pages/content/ContentPage.jsx";
import Admin from "../panel/Admin/Admin.jsx";
import CreateContent from "../panel/Admin/contentManagement/CreateContent.jsx";
import Main from "../panel/Admin/Main.jsx";
import Header from "../panel/Admin/Header.jsx";
import ContentList from "../panel/Admin/contentManagement/ContentList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
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
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Signup />,
      },
      {
        path: "/:type",
        element: <ContentPage />,
      },
      {
        path: "/:type/:id",
        element: <ContentDetails />,
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
  {
    path: "/auth/admin",
    element: <PrivateRoot />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <Main />,
            children: [
              {
                path: "dashboard",
                element: <Main />,
              },
              {
                path: "content-management/create",
                element: <CreateContent />,
              },
              {
                path: "content-management/edit/:id",
                element: <CreateContent />,
              },
              {
                path: "content-management/contents-list",
                element: <ContentList />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
