import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login/Login";
import Regiatration from "../Components/Login/Registration/Regiatration";
import Main from "../Layout/Main";

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
    ],
  },
]);

export default router;
