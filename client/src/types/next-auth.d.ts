import { User } from "./interface";

declare module "next-auth" {
  interface Session {
    user: User;
  };
};