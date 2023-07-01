import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFound";
import { ProfilePage } from "pages/ProfilePage";
import { type RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not found"
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
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
    element: <ProfilePage/>,
    path: routePaths[AppRoutes.PROFILE]
  },
  {
    element: <NotFoundPage/>,
    path: routePaths[AppRoutes.NOT_FOUND]
  }
];
