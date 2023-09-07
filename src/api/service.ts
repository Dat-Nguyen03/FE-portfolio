import { ServiceForm } from "../interfaces/schemas";
import instance from "./instance";

export const getAllServices = () => {
  return instance.get("/services");
};

export const getServiceByID = (id: number | string) => {
  return instance.get(`/services/${id}`);
};

export const postService = (data: ServiceForm) => {
  return instance.post("/services", data);
};

export const removeService = (id: number | string) => {
  return instance.delete(`/services/${id}`);
};

export const editService = (id: number | string, data: ServiceForm) => {
  return instance.patch(`/services/${id}`, data);
};
