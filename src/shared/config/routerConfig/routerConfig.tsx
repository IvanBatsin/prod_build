import { AboutPage } from "pages/AboutPage";
import { ArticlesPage } from "pages/ArticlesPage/";
import { ArticlesDetailsPage } from "pages/ArticleDetailsPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { type RouteProps } from "react-router-dom";
import ArticleEditPage from "pages/ArticleEditPage/ui/ArticleEditPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLES_DETAILS = "articleDetails",
  ARTICLES_CREATE = "articleCreate",
  ARTICLES_EDIT = "articleEdit",
  NOT_FOUND = "not found"
}

export type AppRouterProps = RouteProps & {
  authOnly?: boolean
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile", // + id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLES_DETAILS]: "/articles", // + id
  [AppRoutes.ARTICLES_EDIT]: "/articles/:id/edit",
  [AppRoutes.ARTICLES_CREATE]: "/articles/create",
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
    path: `${routePaths[AppRoutes.PROFILE]}/:id`
  },
  {
    authOnly: true,
    element: <ArticlesDetailsPage/>,
    path: `${routePaths[AppRoutes.ARTICLES_DETAILS]}/:id`
  },
  {
    authOnly: true,
    element: <ArticleEditPage/>,
    path: `${routePaths[AppRoutes.ARTICLES_EDIT]}`
  },
  {
    authOnly: true,
    element: <ArticleEditPage/>,
    path: `${routePaths[AppRoutes.ARTICLES_CREATE]}`
  },
  {
    authOnly: true,
    element: <ArticlesPage/>,
    path: routePaths[AppRoutes.ARTICLES]
  },
  {
    element: <NotFoundPage/>,
    path: routePaths[AppRoutes.NOT_FOUND]
  }
];
