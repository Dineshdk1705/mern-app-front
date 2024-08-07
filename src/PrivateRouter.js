import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ element: Element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRouter;
