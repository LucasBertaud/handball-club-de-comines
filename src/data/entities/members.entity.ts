import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('members')
export class ArticleEntity {
    @PrimaryColumn({type: 'varchar', length: 100})
    email: string;

    @Column({type: 'date'})
    birthdate: Date;

    @Column({type: "varchar", length: 100})
    lastname: string;

    @Column({type: 'varchar', length: 50})
    firstname: string;

    @Column({type: 'varchar', length: 255})
    password: string;

    @Column({type: 'varchar', length: 20})
    role: string;

    @Column({type: "date"})
    register_date: Date;
}