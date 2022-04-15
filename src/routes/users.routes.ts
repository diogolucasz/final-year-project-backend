import { Router } from 'express';

import createUserController from '../useCases/createUser';
import createPermissionController from '../useCases/createPermission';
import createRouteController from '../useCases/createRole';


export const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController().handle(request, response)
});

usersRoutes.post("/permissions", (request, response) => {
    return createPermissionController().handle(request, response)
});

usersRoutes.post("/roles", (request, response) => {
    return createRouteController().handle(request, response)
});