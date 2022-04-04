import { Course } from "../courses/entities/Course";
import { ICreateCourseDTO } from "./ICreateCourseDTO";

export interface ICoursesRepository {
    findByName(name: string): Promise<Course>;
    create(data: ICreateCourseDTO): Promise<Course>;
    save(course: Course): Promise<Course>;
}