import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { userSchema } from "@/schemas/userSchema";
import { z } from "zod";

export let token: string | null = null;
export let decodedToken: TokenSchema | null = null;
const baseURL = "http://localhost:3000/auth";

export type TokenSchema = {
  userId: number;
  email: string;
  rol: number;
  expiresAt: string;
};
export type registerSchema = Omit<
  z.infer<typeof userSchema>,
  "birthdate" | "photo" | "phonenumber" | "userid" | "rol"
>;

export function getToken(): string | null {
  return token;
}
export function setToken(newToken: string | null) {
  token = newToken;
}
export function getDecodedToken(): TokenSchema | null {
  return decodedToken;
}

export function setDecodedToken(token: string | null) {
  decodedToken = token ? jwtDecode(token) : null;
}
export const login = async (email: string, password: string) => {
  return await axios
    .post(baseURL + "/login", {
      password,
      email,
    })
    .then((response) => {
      setToken(response.data.accessToken);
      setDecodedToken(response.data.accessToken);
    });
};
export const register = async (userData: registerSchema) => {
  try {
    return await axios
      .post(baseURL + "/register", userData)
      .then((response) => {
        setToken(response.data.accessToken);
        setDecodedToken(response.data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
