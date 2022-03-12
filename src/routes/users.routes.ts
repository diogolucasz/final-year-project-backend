import { Router } from 'express';
import { createUserController } from '../useCases/createUser';

export const usersRoutes = Router();

//const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);