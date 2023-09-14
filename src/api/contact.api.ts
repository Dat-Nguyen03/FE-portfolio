import { ContactForm } from "../interfaces/schemas";
import instance from "./instance";

export const sendContact = (data: ContactForm) => {
  return instance.post("/contact", data);
};
