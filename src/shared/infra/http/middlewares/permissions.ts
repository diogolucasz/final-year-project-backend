import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import { User } from "../../../../modules/users/entities/User";
import { UserRepository } from "../../../../modules/users/repositories/UsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";

async function tokenDecoder(request: Request): Promise<User | undefined> {

    const userRepository = getCustomRepository(UserRepository);

    const authHeader = request.headers.authorization;

    const [, token] = authHeader?.split(" ");

    const payload = decode(token);

    const user = await userRepository.findBySubject(payload?.sub)

    console.log(user)

    return user;
}

export function is(rolesRoutes: String[]) {

    const roleAuthorized = async (request: Request, response: Response, next: NextFunction) => {

        const user = await tokenDecoder(request)

        const matchingRoles = user.roles
            .map((role) => role.name)
            .some((role) => rolesRoutes.includes(role));

        if (matchingRoles) {
            return next();
        }

        throw new AppError(401, "Not authorized");
    }

    return roleAuthorized;
}