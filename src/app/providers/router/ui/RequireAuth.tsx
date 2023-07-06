import React from "react";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routePaths } from "shared/config/routerConfig/routerConfig";

export const RequireAuth: React.FC = (props) => {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();
  const { children } = props;

  if (!authData) {
    return <Navigate to={routePaths.main} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
