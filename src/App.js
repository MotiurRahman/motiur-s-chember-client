import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import router from "./Routers/Routers";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
