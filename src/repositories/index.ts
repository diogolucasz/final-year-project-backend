import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { getRepository } from "typeorm";
import { Permission } from "../entities/Permission";
import { Course } from "../entities/Course";

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
