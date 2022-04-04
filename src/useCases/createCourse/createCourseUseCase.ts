import { ICoursesRepository } from "../../modules/dto/ICourseRepository";
import { AppError } from "../../shared/errors/AppError";

interface CourseRequest {
    name: string;
    description: string;
};

export class CreateCourseUseCase {

    constructor(
        private coursesRepository: ICoursesRepository,
    ) { }

    async execute({ name, description }: CourseRequest) {

        const courseAlreadyExists = await this.coursesRepository.findByName(name);

        if (courseAlreadyExists) {
            throw new AppError(`Course ${name} already exists.`)
        }

        const course = this.coursesRepository.create({
            name,
            description,
        });

        await this.coursesRepository.save(await course);

        return course;
    }
}
