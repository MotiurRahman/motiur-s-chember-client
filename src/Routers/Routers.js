import { createBrowserRouter, Route } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login/Login";
import Regiatration from "../Components/Login/Registration/Regiatration";
import Main from "../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
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
    ],
  },
]);

export default router;
