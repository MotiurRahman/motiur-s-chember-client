import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();

  if (loader) {
    return (
      <p className="text-3xl font-bold text-center my-auto">Loading .......</p>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
