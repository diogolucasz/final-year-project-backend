import { Router } from 'express';
import createUserController from '../useCases/createUser';

export const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController().handle(request, response)
});