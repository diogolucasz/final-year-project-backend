import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissionsRoles1645898898550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "permissions_roles",
                columns: [
                    { name: "role_id", type: "uuid" },
                    { name: "permission_id", type: "uuid" },
                ],
                foreignKeys: [
                    {
                        columnNames: ["permission_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "permissions",
                        name: "FK_PERMISSIONS_ROLES",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                    {
                        columnNames: ["role_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "roles",
                        name: "FK_ROLES_PERMISSIONS",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions_roles");
    }
}