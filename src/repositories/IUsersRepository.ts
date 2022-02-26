export interface ICreateUserDTO {
    name: string;
    surname: string
    username: string;
    password: string
    email: string;

}

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
}