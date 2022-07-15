import { Router } from "express";

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import createSessionController from "../../../../modules/users/useCases/createSession";
import refreshTokenController from "../../../../modules/users/useCases/refreshToken";

export const sessionsRoutes = Router();

sessionsRoutes.post("/sessions", (request, response) => {
    return createSessionController().handle(request, response)
});

sessionsRoutes.post("/refresh-token", (request, response) => {
    return refreshTokenController().handle(request, response)
});