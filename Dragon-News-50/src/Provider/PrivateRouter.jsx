import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
//   console.log(location);

  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }

  return (
    <div>
      <Navigate state={location.pathname} to="/auth/login"></Navigate>
    </div>
  );
};

export default PrivateRouter;
