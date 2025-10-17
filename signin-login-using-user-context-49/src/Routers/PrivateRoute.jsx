import React, { use } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import { GridLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation()
  console.log(location)

  if (user) {
    return children;
  }

  if(loading){
    return <span className="p-10"><GridLoader color="red"/></span>
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
