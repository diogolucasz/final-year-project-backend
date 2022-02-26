import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserRoles1645899048597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_roles",
                columns: [
                    { name: "role_id", type: "uuid" },
                    { name: "user_id", type: "uuid" },
                ],
                foreignKeys: [
                    {
                        columnNames: ["role_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "roles",
                        name: "FK_ROLES_USERS",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                    {
                        columnNames: ["user_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        name: "FK_USERS_ROLES",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_roles");
    }
}
