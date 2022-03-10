export interface ICreateUserDTO {
    name: string;
    surname: string
    username: string;
    password: string;
    email: string;
    course_id: string;
    course?: string;
    id?: string,
    permissions?: string[],
    roles?: string[],
    created_at?: Date

}
