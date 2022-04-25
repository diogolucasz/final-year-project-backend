import { Router } from "express";
import { is } from "../middlewares/permissions";
import { coursesRoutes } from "./courses.routes";
import { sessionsRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();



routes.use("/users", usersRoutes);
routes.use("/courses", coursesRoutes);
routes.use(sessionsRoutes)