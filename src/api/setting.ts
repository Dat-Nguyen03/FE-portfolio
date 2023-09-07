import { SettingForm } from "../interfaces/schemas";
import instance from "./instance";

export const getSetting = () => {
  return instance.get("/setting");
};

export const getSettingByID = (id: number | string) => {
  return instance.get(`/setting/${id}`);
};

export const editSetting = (id: number | string, data: SettingForm) => {
  return instance.patch(`/setting/${id}`, data);
};
