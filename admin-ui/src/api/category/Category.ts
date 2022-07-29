import { App } from "../app/App";

export type Category = {
  app?: App | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
