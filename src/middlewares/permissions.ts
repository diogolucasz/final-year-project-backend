import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../modules/users/repositories/UsersRepository";

async function tokenDecoder(request: Request) {

    const userRepository = getCustomRepository(UserRepository);

    const authHeader = request.headers.authorization;

    const [, token] = authHeader?.split(" ");

    const payload = decode(token);

    const user = await userRepository.findBySubject(payload.sub)
}

function is(role: String[]) {

    const roleAuthorized = (request: Request, response: Response, next: NextFunction) => {

    }
}