import { Router } from 'express';

import createUserController from '../useCases/createUser';
import createPermissionController from '../useCases/createPermission';

export const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController().handle(request, response)
});

usersRoutes.post("/permissions", (request, response) => {
    return createPermissionController().handle(request, response)
});