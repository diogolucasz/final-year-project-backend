import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import auth from "../../config/auth";
import { IUsersRepository } from "../../modules/users/dto/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/users/dto/IUserTokensRepository";
import { Role } from "../../modules/users/entities/Role";
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
        id: string,
    },
    token: string;
    // roles: Role[]
    refresh_token: string;
}

export class CreateSessionUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private usersTokensRepository: IUsersTokensRepository,
        private dateProvider: IDateProvider,
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        const { expires_in_token, secret_refresh_token, secret_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        if (!user) {
            throw new AppError(400, "O e-mail ou a password estão incorretos.")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError(400, "O e-mail ou a password estão incorretos.")
        };

        const roles = await this.usersRepository.findRoleByUserID(user.id);

        const token = sign({ roles }, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ email, roles }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        })

        const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days);

        await this.usersTokensRepository.create({
            user_id: user.id,
            refresh_token,
            expires_date: refresh_token_expires_date,
        })

        // Retrieve users' permissions

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email,
                id: user.id,
            },
            token,
            // roles,
            refresh_token,
        }



        return tokenReturn;
    }
}