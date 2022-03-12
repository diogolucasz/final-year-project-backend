import { Role } from "../modules/users/entities/Role";
import { getRepository } from "typeorm";
import { Permission } from "../modules/users/entities/Permission";
import { Course } from "../modules/users/entities/Course";
import { User } from "../modules/users/entities/User";

export const UserRepository = () => {
  return getRepository(User);
};

export const RoleRepository = () => {
  return getRepository(Role);
};

export const PermissionRepository = () => {
  return getRepository(Permission);
};

export const CourseRepository = () => {
  return getRepository(Course);
};
