import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not found"
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: RouteProps[] = [
  {
    element: <MainPage/>,
    path: routePaths[AppRoutes.MAIN]
  },
  {
    element: <AboutPage/>,
    path: routePaths[AppRoutes.ABOUT]
  },
  {
    element: <NotFound/>,
    path: routePaths[AppRoutes.NOT_FOUND]
  }
];
