import { Role } from "../entities/Role";
import { User } from "../modules/users/entities/User";
import { getCustomRepository, getRepository } from "typeorm";
import { Permission } from "../entities/Permission";
import { Course } from "../entities/Course";
import { FUserRepository } from "../modules/users/repositories/UsersRepository";

// export const UserRepository = () => {
//   return getCustomRepository(FUserRepository);
// };

export const RoleRepository = () => {
  return getRepository(Role);
};

export const PermissionRepository = () => {
  return getRepository(Permission);
};

export const CourseRepository = () => {
  return getRepository(Course);
};
