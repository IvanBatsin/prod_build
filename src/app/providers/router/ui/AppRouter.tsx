
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { type AppRouterProps, routeConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = (): JSX.Element => {
  const renderWithWrapper = React.useCallback((route: AppRouterProps, index: number) => {
    const element = (
      <Suspense fallback={<PageLoader/>}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return <Route
            key={`${index}_${route.path || ""}`}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}/>;
  }, []);

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};
