import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Course } from "../../courses/entities/Course";
import { Permission } from "./Permission";
import { Role } from "./Role";

@Entity("users")
export class User {

	@PrimaryColumn()
	id: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	name: string;

	@Column()
	surname: string;

	@Column()
	password: string;

	@ManyToOne(() => Course)
	@JoinColumn({ name: "course_id" })
	course: Course;

	@Column()
	course_id: string;

	@ManyToMany(() => Role)
	@JoinTable({
	  name: "users_roles",
	  joinColumns: [{ name: "user_id" }],
	  inverseJoinColumns: [{ name: "role_id" }],
	})
	roles?: Role[];

	@ManyToMany(() => Permission)
	@JoinTable({
	  name: "users_permissions",
	  joinColumns: [{ name: "user_id" }],
	  inverseJoinColumns: [{ name: "permission_id" }],
	})
	permissions?: Permission[];

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
