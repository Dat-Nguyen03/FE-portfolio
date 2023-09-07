import instance from "./instance";

export const getAllIcon = () => {
  return instance.get("/icon");
};
