import { routePaths } from "shared/config/routerConfig/routerConfig";
import AboutLinkIcon from "../assets/aboutLink.svg";
import MainLinkIcon from "../assets/mainLink.svg";
import ProfileLinkIcon from "../assets/profileLink.svg";
import ArticlesIcon from "../assets/article.svg";

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean
};

export const sidebarItemList: SidebarItemType[] = [
  {
    path: routePaths.about,
    text: "aboutLink",
    Icon: AboutLinkIcon
  },
  {
    path: routePaths.main,
    text: "mainLink",
    Icon: MainLinkIcon
  },
  {
    path: routePaths.profile,
    text: "profileLink",
    Icon: ProfileLinkIcon,
    authOnly: true
  },
  {
    path: routePaths.articles,
    text: "articlesLink",
    Icon: ArticlesIcon,
    authOnly: true
  }
];
