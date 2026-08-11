import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1786484559329 implements MigrationInterface {
    name = 'InitialMigration1786484559329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`department\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'Active', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_765bc1ac8967533a04c74a9f6a\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_765bc1ac8967533a04c74a9f6a\` ON \`employees\``);
        await queryRunner.query(`DROP TABLE \`employees\``);
    }

}
