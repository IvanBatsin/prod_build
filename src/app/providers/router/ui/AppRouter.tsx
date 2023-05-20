
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {routeConfig.map((configObj, index) => {
          return <Route
              key={`${index}_${configObj.path}`}
              path={configObj.path}
              element={<div className="page-wrapper">{configObj.element}</div>}/>;
        })}
      </Routes>
    </Suspense>
  );
};
