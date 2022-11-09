import { createBrowserRouter, Route } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login/Login";
import Regiatration from "../Components/Login/Registration/Regiatration";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Services from "../Components/Services/Services";
import ServicesDetails from "../Components/Services/ServicesDetails";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("http://localhost:8000/service_withlimit");
        },
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Regiatration></Regiatration>,
      },
      {
        path: "/add_service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        loader: () => {
          return fetch("http://localhost:8000/service");
        },
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:8000/service/${params.id}`);
        },
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

export default router;
