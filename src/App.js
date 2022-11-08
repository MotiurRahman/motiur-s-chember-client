import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
