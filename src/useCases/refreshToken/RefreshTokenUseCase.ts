import { verify, sign } from "jsonwebtoken";
import auth from "../../config/auth";
import { IUsersRepository } from "../../modules/users/dto/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/users/dto/IUserTokensRepository";
import { AppError } from "../../shared/errors/AppError";
import { IDateProvider } from "../../shared/providers/DataProvider/IDateProvider";

interface IPayLoad {
    sub: string;
    email: string;
}

interface ITokenResponse {
    refresh_token: string,
    token: string
}

export class RefreshTokenUseCase {

    constructor(
        private usersTokensRepository: IUsersTokensRepository,
        private usersRepository: IUsersRepository,
        private dateProvider: IDateProvider
    ) { }

    async execute(token: string): Promise<ITokenResponse> {

        const { email, sub: user_id } = verify(token, auth.secret_refresh_token) as IPayLoad;

        // console.log(token, email,user_id)

        const userToken = await this.usersTokensRepository.findByUserId(user_id, token)

        if (!userToken) {
            throw new AppError(400, "Refresh token invalid")
        }

        await this.usersTokensRepository.deleteById(userToken.id)

        const roles = await this.usersRepository.findRoleByUserID(user_id);

        // console.log(roles)

        const refresh_token = sign({ email, roles }, auth.secret_refresh_token, {
            subject: user_id,
            expiresIn: auth.expires_in_refresh_token,
        });

        const expires_date = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        );

        await this.usersTokensRepository.create({
            user_id,
            refresh_token,
            expires_date,
        });

        const regenerated_token = sign({}, auth.secret_token, {
            subject: user_id,
            expiresIn: auth.expires_in_token,
            //roles
        });

        return {
            refresh_token,
            token: regenerated_token
        };
    }
}