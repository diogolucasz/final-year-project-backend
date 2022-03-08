import { UserRepository } from "../../repositories";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { User } from "../../modules/users/entities/User";
import { AppError } from "../../errors/AppError";
import auth from "../../config/auth";
import { getRepository } from "typeorm";

interface IRequest {
    email: string,
    password: string,
}

interface IResponse {
    user: {
        name: string,
        email: string,
    },
    token: string;
}

export class CreateSessionUseCase {

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new AppError("O e-mail ou a password estão incorretos.")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("O e-mail ou a password estão incorretos.")
        };

        const token = sign({}, auth.secret_token, {
            subject: user.id,
            expiresIn: auth.experies_in_token,
        });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenReturn;
    }
}