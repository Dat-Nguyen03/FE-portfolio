import { AboutForm } from "../interfaces/schemas";
import instance from "./instance";

export const getAllAbout = () => {
  return instance.get("/about");
};

export const getAboutById = (id: number | string) => {
  return instance.get(`/about/${id}`);
};

export const editAbout = (id: number | string, data: AboutForm) => {
  return instance.patch(`/about/${id}`, data);
};
