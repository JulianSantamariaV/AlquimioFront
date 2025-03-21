import axios from "axios";
import { userSchema } from "@/schemas/userSchema";
import { z } from "zod";

const baseURL = "http://localhost:3000/auth";


export type registerSchema = Omit<
  z.infer<typeof userSchema>,
  "birthdate" | "photo" | "phonenumber" | "userid" | "rol"
>;

export const login = async (email: string, password: string) => {
  return await axios
    .post(
      baseURL + "/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response.data);
      return response.data as string;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
export const register = async (userData: registerSchema) => {
  return await axios
    .post(baseURL + "/register", userData, { withCredentials: true })
    .then((response) => {
      return response.data as string;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
export const refreshToken = async () => {
  return await axios
    .post(
      baseURL + "/refreshToken",
      {},
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log(response);
      return response.data as string;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
