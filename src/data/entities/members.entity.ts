import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { NewsEntity } from './news.entity';
import { PlayEntity } from './play.entity';

@Entity('members')
export class MembersEntity {
    @PrimaryColumn({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({ type: "varchar", length: 100 })
    lastname: string;

    @Column({ type: 'varchar', length: 50 })
    firstname: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 20 }) 
    role: string;

    @Column({ type: "date" })
    register_date: Date;

    @OneToMany(() => NewsEntity, news => news.member)
    @JoinColumn()
    news: NewsEntity[];

    @OneToMany(() => PlayEntity, play => play.member)
    @JoinColumn()
    plays: PlayEntity[];
}