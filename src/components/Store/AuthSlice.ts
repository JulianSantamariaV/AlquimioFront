import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenSchema } from "../apiCalls/Auth";
import { jwtDecode } from "jwt-decode";
import { RootState } from "./AuthStore";

export type AuthState = {
  accessToken: string | null;
  decodedToken: TokenSchema | null;
};

const initialState: AuthState = {
  accessToken: null,
  decodedToken: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    getAuthState: (state: AuthState) => state,
  },
  reducers: {
    putToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
      state.decodedToken = state.accessToken
        ? jwtDecode(state.accessToken)
        : null;
    },
    deleteToken: (state) => {
      state.accessToken = null;
      state.decodedToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { putToken, deleteToken } = AuthSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default AuthSlice.reducer;
