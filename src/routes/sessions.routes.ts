import { Router } from "express";
import { CreateSessionController } from "../useCases/createSession/createSessionController";

export const sessionsRoutes = Router();

const createSessionController = new CreateSessionController();

sessionsRoutes.post("/sessions", createSessionController.handle)
