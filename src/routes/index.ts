import { Router } from "express";
import { coursesRoutes } from "./courses.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/courses", coursesRoutes)