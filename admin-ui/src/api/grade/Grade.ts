import { App } from "../app/App";

export type Grade = {
  app?: App | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
