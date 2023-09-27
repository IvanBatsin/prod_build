import { createSelector } from "@reduxjs/toolkit";
import { getUserRoles } from "../getUserRoles";
import { Roles } from "entities/User/model/types/user";

export const getIsUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(Roles.MANAGER)));
