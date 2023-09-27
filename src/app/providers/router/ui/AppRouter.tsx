
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { type AppRouterProps, routeConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { RequireRoles } from "./RequireRoles";

export const AppRouter = (): JSX.Element => {
  const renderWithWrapper = React.useCallback((route: AppRouterProps, index: number) => {
    const element = (
      <Suspense fallback={<PageLoader/>}>
        {route.element}
      </Suspense>
    );

    let elementToShow = element;
    if (route.authOnly) {
      elementToShow = <RequireAuth>{element}</RequireAuth>;
    }

    if (route.roles) {
      elementToShow = <RequireRoles roles={route.roles}>{element}</RequireRoles>;
    }

    return <Route
            key={`${index}_${route.path || ""}`}
            path={route.path}
            element={elementToShow}/>;
  }, []);

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};
