import { ProjectForm } from "../interfaces/schemas";
import instance from "./instance";

export const getAll = () => {
  return instance.get("/projects");
};

export const getProjectByID = (id: number | string) => {
  return instance.get(`/projects/${id}`);
};

export const addProject = (data: ProjectForm) => {
  return instance.post("/projects", data);
};

export const removeProject = (id: number | string) => {
  return instance.delete(`/projects/${id}`);
};

export const editProject = (id: number | string, data: ProjectForm) => {
  return instance.patch(`/projects/${id}`, data);
};
