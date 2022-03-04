import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCourseController } from '../useCases/createCourse/createCourseController';

export const coursesRoutes = Router();

const createCourseController = new CreateCourseController();

coursesRoutes.use(ensureAuthenticated)
coursesRoutes.post("/", createCourseController.handle);