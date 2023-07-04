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

type AppRouterProps = RouteProps & {
  authOnly?: boolean
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: AppRouterProps[] = [
  {
    element: <MainPage/>,
    path: routePaths[AppRoutes.MAIN]
  },
  {
    element: <AboutPage/>,
    path: routePaths[AppRoutes.ABOUT]
  },
  {
    authOnly: true,
    element: <ProfilePage/>,
    path: routePaths[AppRoutes.PROFILE]
  },
  {
    element: <NotFoundPage/>,
    path: routePaths[AppRoutes.NOT_FOUND]
  }
];
