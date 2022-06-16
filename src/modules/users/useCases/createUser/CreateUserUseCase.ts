import { hash } from "bcryptjs";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUsersRepository } from "../../dto/IUsersRepository";


export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ name, surname, username, email, password, course_id }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError(400, "User already exists");
        }

        const passwordHashed = await hash(password, 8)

        const user = await this.usersRepository.create({
            name,
            surname,
            username,
            email,
            course_id,
            password: passwordHashed,
        });

        await this.usersRepository.save(user);

    }
}

