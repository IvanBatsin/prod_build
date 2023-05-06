
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((configObj, index) => {
          return <Route 
              key={`${index}_${configObj.path}`}
              path={configObj.path} 
              element={<div className="page-wrapper">{configObj.element}</div>}/>
        })}
      </Routes>
    </Suspense>
  )
}