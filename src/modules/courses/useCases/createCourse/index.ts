import { CoursesRepository } from "../../repositories/CourseRepository";
import { CreateCourseController } from "./createCourseController";
import { CreateCourseUseCase } from "./createCourseUseCase";

export default (): CreateCourseController => {
    
    const courseRepository = new CoursesRepository();

    const createCourseUseCase = new CreateCourseUseCase(
        courseRepository
    )

    const createCourseController = new CreateCourseController(
        createCourseUseCase
    )

    return createCourseController;
}
