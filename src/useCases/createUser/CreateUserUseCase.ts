import { ICreateUserDTO } from "../../modules/users/dto/ICreateUserDTO";
import { hash } from "bcryptjs";
import { IUsersRepository } from "../../modules/users/dto/IUsersRepository";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ name, surname, username, email, password, course_id }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHashed = await hash(password, 8)

        const user = await this.usersRepository.create({
            name,
            surname,
            username,
            email,
            password: passwordHashed,
            course_id,
        });

        await this.usersRepository.save(user);

    }
}

