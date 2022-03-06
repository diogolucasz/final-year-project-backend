import { NextFunction, Response, Request } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "672efd0ed3d534c72091f142f6f6d494") as IPayLoad;

        const userRepository = UserRepository();

        const user = userRepository.findOne(user_id)

        if (!user) {
            throw new Error("User does not exists")
        }

        next();

    } catch (error) {
        throw new AppErrorx("Invalid token")
    }
}