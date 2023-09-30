import React from "react";
import { getUserRoles } from "@/entities/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routePaths } from "@/shared/config/routerConfig/routerConfig";
import type { Roles } from "@/entities/User/model/types/user";

interface RequireRolesProps {
  roles?: Roles[]
  children: React.ReactNode
}

export const RequireRoles: React.FC<RequireRolesProps> = (props) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);
  const { children, roles } = props;

  const isUserHasRole = React.useMemo(() => {
    if (!roles?.length) {
      return true;
    }

    return roles.some(requiredRole => {
      return userRoles?.includes(requiredRole);
    });
  }, [roles, userRoles]);

  if (!isUserHasRole) {
    return <Navigate to={routePaths.forbidden} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
