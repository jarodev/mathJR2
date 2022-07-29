import { App } from "../app/App";

export type Tag = {
  apps?: Array<App>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
