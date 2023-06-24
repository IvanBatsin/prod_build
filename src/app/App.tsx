import React, { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.initAuthUser());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};
