import { createSlice } from "@reduxjs/toolkit";
import { TokenSchema } from "../apiCalls/Auth";
import { jwtDecode } from "jwt-decode";

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
  selectors:{
    getState: (state: AuthState) => state
  },
  reducers: {
    putToken: (state, action) => {
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


export default AuthSlice.reducer;
