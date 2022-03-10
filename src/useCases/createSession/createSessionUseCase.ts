import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
//import { AppError } from "../../errors/AppError";
import auth from "../../config/auth";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/users/repositories/UserTokensRepository";
import { AppError } from "../../shared/errors/AppError";
import { IDateProvider } from "../../shared/providers/DataProvider/IDateProvider";

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
    refresh_token: string;
}

export class CreateSessionUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private usersTokensRepository: IUsersTokensRepository,
        private dateProvider: IDateProvider
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        const { expires_in_token, secret_refresh_token, secret_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        if (!user) {
            throw new AppError("O e-mail ou a password estão incorretos.")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("O e-mail ou a password estão incorretos.")
        };

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        })

        const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days);

        await this.usersTokensRepository.create({
            user_id: user.id,
            refresh_token,
            expires_date: refresh_token_expires_date,
        })

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token,
            refresh_token,
        }

        return tokenReturn;
    }
}