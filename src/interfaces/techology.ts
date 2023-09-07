import { IProject } from "./project";

export interface ITechology {
  _id?: string | number;
  name: string;
  project: IProject[];
  technologyId?: string;
  updatedAt?: string;
  createdAt?: string;
}
