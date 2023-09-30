import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import type { AppDispatch, StateSchema } from "@/app/providers/StoreProvider";
import type { Dispatch } from "react";
import { useDispatch } from "react-redux";

export const useAppDispatch = (): ThunkDispatch<StateSchema, undefined, AnyAction> & Dispatch<AnyAction> => useDispatch<AppDispatch>();
