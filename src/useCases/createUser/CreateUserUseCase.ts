import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";


export class CreateUserUseCase {


    async execute({ name, surname, username, email, password }: ICreateUserDTO): Promise<void> {

        await this.usersRepository.create({
            name,
            surname,
            username,
            email,
            password
        })
    }
}

