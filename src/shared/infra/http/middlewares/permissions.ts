import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import { User } from "src/modules/users/entities/User";
import { UserRepository } from "src/modules/users/repositories/UsersRepository";
import { AppError } from "src/shared/errors/AppError";
import { getCustomRepository } from "typeorm";

async function tokenDecoder(request: Request): Promise<User | undefined> {

    const userRepository = getCustomRepository(UserRepository);

    const authHeader = request.headers.authorization;

    const [, token] = authHeader?.split(" ");

    const payload = decode(token);

    const user = await userRepository.findBySubject(payload?.sub)

    return user;
}

export function is(role: String[]) {

    const roleAuthorized = async (request: Request, response: Response, next: NextFunction) => {

        const user = await tokenDecoder(request)

        const userRoles = user.roles.map(role => role.name)

        const existingRoles = userRoles.some(r => role.includes(r))

        if (existingRoles) {
            return next();
        }

        throw new AppError(401, "Not authorized");
    }

    return roleAuthorized;
}