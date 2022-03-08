import { ICreateUserDTO } from "../../modules/users/dto/ICreateUserDTO";
import { hash } from "bcryptjs";
import { User } from "../../modules/users/entities/User";
import { UserRepository } from "../../repositories";

export class CreateUserUseCase {

    async execute({ name, surname, username, email, password, course_id }: ICreateUserDTO): Promise<Error | User> {

        const existUser = await UserRepository().findByEmail(email);

        if (existUser) {
            return new Error("User already exists");
        }

        const passwordHashed = await hash(password, 8)

        const user = await UserRepository().create({
            name,
            surname,
            username,
            email,
            course_id,
            password: passwordHashed,
        });

        await UserRepository().save(user);

        return user;
    }
}

