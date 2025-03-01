import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export let token: string | null = null;
export let decodedToken: TokenSchema | null = null;

export type TokenSchema = {
  userId: number;
  email: string;
  rol: number;
  expiresAt: string;
};

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
  const navigate = useNavigate();
  const baseURL = "http://localhost:3000/auth/login";
  return await axios
    .post(baseURL, {
      password,
      email,
    })
    .then((response) => {
      setToken(response.data.accessToken);
      setDecodedToken(response.data.accessToken);
      navigate("/");
    });
};

export const register = async (userData: any) => {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};
