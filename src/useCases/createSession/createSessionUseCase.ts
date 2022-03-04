import { UserRepository } from "../../repositories";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { User } from "../../entities/User";

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

        const user = await UserRepository().findOne({ email });

        if (!user) {
            throw new Error("O e-mail ou a password estão incorretos.")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("O e-mail ou a password estão incorretos.")
        }

        const token = sign({}, "672efd0ed3d534c72091f142f6f6d494", {
            subject: user.id,
            expiresIn: '1d'
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