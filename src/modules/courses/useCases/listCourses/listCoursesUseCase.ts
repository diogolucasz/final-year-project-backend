import { Course } from "../../entities/Course";
import { CoursesRepository } from "../../repositories/CourseRepository";


export class ListCoursesUseCase {

    constructor(
        private coursesRepository: CoursesRepository
    ) { }

    async execute(): Promise<Course[]> {
        const categories = await this.coursesRepository.list();

        return categories;
    }
}