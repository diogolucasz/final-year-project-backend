import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Role } from "../../users/entities/Role";
import { User } from "../../users/entities/User";
import { v4 as uuid } from "uuid";

@Entity("posts")
export class Post {

    @PrimaryColumn()
    id: string;

    @Column()
    subject: string;

    @Column()
    message: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    // @OneToMany(() => ClassSchedule {
    //     cascade: ['insert'],
    // })
    // class_schedule: Schedule[];

    @CreateDateColumn()
    created_at: Date;

    // @CreateDateColumn()
    // updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
