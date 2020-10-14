import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanage1602641271039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned:true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // Número depois da vírgula
                    precision: 2, // Números antes da vírgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // Número depois da vírgula
                    precision: 2, // Números antes da vírgula
                },
                {
                    name: 'about',
                    type: 'text', // Pode receber mais caracteres
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar', // Pode receber mais caracteres
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //DOwngrade desfazer o que foi feito no metodo up
        await queryRunner.dropTable('orphanages');
    }

}
