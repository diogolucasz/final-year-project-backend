import { Router } from 'express';
import { CreateCourseController } from '../useCases/createCourse/createCourseController';
import { CreateUserController } from '../useCases/createUser/CreateUserController';

export const coursesRoutes = Router();

const createCourseController = new CreateCourseController();

coursesRoutes.post("/", createCourseController.handle);