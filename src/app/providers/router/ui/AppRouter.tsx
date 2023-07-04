
import { getAuthData } from "entities/User";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = (): JSX.Element => {
  const isAuth = useSelector(getAuthData);

  const routes = React.useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {routes.map((configObj, index) => {
          return <Route
              key={`${index}_${configObj.path || ""}`}
              path={configObj.path}
              element={<div className="page-wrapper">{configObj.element}</div>}/>;
        })}
      </Routes>
    </Suspense>
  );
};
