import { Router } from "express";
import { coursesRoutes } from "./courses.routes";
import { postsRoutes } from "./posts.routes";
import { sessionsRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();



routes.use("/users", usersRoutes);
routes.use("/courses", coursesRoutes);
routes.use("/posts", postsRoutes)
routes.use(sessionsRoutes)