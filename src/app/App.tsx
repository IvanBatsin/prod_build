import React, { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { getUserInited, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isUserInited = useSelector(getUserInited);

  React.useEffect(() => {
    dispatch(userActions.initAuthUser());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          {isUserInited && <AppRouter/>}
        </div>
      </Suspense>
    </div>
  );
};
