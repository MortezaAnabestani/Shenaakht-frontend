import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
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

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
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
]);

export default router;
