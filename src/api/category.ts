import { CategoryForm } from "../interfaces/schemas";
import instance from "./instance";

export const getCategory = () => {
  return instance.get("/project-category");
};

export const getCategoryById = (id: number | string) => {
  return instance.get(`/project-category/${id}`);
};

export const removeCategory = (id: number | string) => {
  return instance.delete(`/project-category/${id}`);
};

export const updateCategory = (id: number | string, data: CategoryForm) => {
  return instance.patch(`/project-category/${id}`, data);
};

export const addCategory = (data: CategoryForm) => {
  return instance.post("/project-category", data);
};
