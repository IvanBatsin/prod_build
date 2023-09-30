import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import type { SidebarItemType } from "../../types/sidebarItems";
import { routePaths } from "@/shared/config/routerConfig/routerConfig";
import AboutLinkIcon from "../../../assets/aboutLink.svg";
import MainLinkIcon from "../../../assets/mainLink.svg";
import ProfileLinkIcon from "../../../assets/profileLink.svg";
import ArticlesIcon from "../../../assets/article.svg";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: routePaths.about,
        text: "aboutLink",
        Icon: AboutLinkIcon
      },
      {
        path: routePaths.main,
        text: "mainLink",
        Icon: MainLinkIcon
      }
    ];

    if (userData) {
      sidebarItemList.push(
        {
          path: `${routePaths.profile}/${userData?.id}`,
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
      );
    }

    return sidebarItemList;
  }
);
