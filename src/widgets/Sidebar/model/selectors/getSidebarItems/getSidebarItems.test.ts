import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getSidebarItems } from "./getSidebarItems";
import { routePaths } from "@/shared/config/routerConfig/routerConfig";
import type { SidebarItemType } from "../../types/sidebarItems";
import AboutLinkIcon from "../../../assets/aboutLink.svg";
import MainLinkIcon from "../../../assets/mainLink.svg";
import ProfileLinkIcon from "../../../assets/profileLink.svg";
import ArticlesIcon from "../../../assets/article.svg";

describe("Get sidebar items test:", () => {
  const commonSidebarItems: SidebarItemType[] = [
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

  const authSidebarItems: SidebarItemType[] = [
    {
      path: `${routePaths.profile}/1`,
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

  test("should return sidebar items with auth data", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: "1",
          username: "test user"
        }
      }
    };
    expect(getSidebarItems(state as StateSchema)).toEqual([...commonSidebarItems, ...authSidebarItems]);
  });

  test("should return sidebar items with no auth data", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined
      }
    };
    expect(getSidebarItems(state as StateSchema)).toEqual(commonSidebarItems);
  });
});
