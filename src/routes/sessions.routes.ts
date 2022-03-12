import { Router } from "express";
import { createSessionController } from "../useCases/createSession";

export const sessionsRoutes = Router();

//const createSessionController = new CreateSessionController();

sessionsRoutes.post("/sessions", createSessionController.handle)
