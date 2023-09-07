import { IProject } from "./project";

export interface ICategory {
  _id?: string | number;
  name: string;
  projects: IProject[];
  updatedAt?: string;
  createdAt?: string;
}
