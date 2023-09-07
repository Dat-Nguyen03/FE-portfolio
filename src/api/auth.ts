import { IUser } from "../interfaces/user";
import instance from "./instance";

export const signIn = (data: IUser) => {
  return instance.post("/signin", data);
};
