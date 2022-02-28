import { CourseRepository } from "../../repositories";

type CourseRequest = {
    name: string;
    description: string;
};

export class CreateCourseUseCase {

    async execute({ name, description }: CourseRequest) {

        const course = CourseRepository().create({
            name,
            description,
        });

        await CourseRepository().save(course);

        return course;
    }
}
