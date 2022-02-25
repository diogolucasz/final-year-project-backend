import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1645828466243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar"      
                    },              
                    {
                        name: "course_id",
                        type: "uuid"
                    },
                    {
                        name: "year",
                        type: "numeric"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "surname",
                        type: "varchar",
                    },
                    {
                        name: "biography",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_Course",
                        referencedTableName: "courses",
                        referencedColumnNames: ["id"],
                        columnNames: ["course_id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
