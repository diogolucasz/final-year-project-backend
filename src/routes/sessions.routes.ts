import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import createSessionController from "../useCases/createSession";
import refreshTokenController from "../useCases/refreshToken";

export const sessionsRoutes = Router();

sessionsRoutes.post("/sessions", (request, response) => {
    return createSessionController().handle(request, response)
});

sessionsRoutes.post("/refresh-token", ensureAuthenticated,(request, response) => {
    return refreshTokenController().handle(request, response)
});