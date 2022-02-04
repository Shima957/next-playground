import { rest } from "msw";
import users from "./api/users";

export const handlers = [rest.get("/api/users", users.get)];
