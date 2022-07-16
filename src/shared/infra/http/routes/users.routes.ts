import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import createUserController from '../../../../modules/users/useCases/createUser';
import createPermissionController from '../../../../modules/users/useCases/createPermission';
import createRouteController from '../../../../modules/users/useCases/createRole';
import assignRole from '../../../../modules/users/useCases/assignRole';
import getUserInfoController from '../../../../modules/users/useCases/getUserInfo';
import getUserProfileUseCase from '../../../../modules/users/useCases/getUserProfile'

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

usersRoutes.post("/assignRole", (request, response) => {
    return assignRole().handle(request, response)
});

usersRoutes.get("/me", ensureAuthenticated, (request, response) => {
    return getUserInfoController().handle(request, response)
});

usersRoutes.get("/profile",( request, response) => {
    return getUserProfileUseCase().handle(request, response)
})