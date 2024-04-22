import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AdversaryTeamsEntity } from './adversary_teams.entity';
import { PlayEntity } from './play.entity';

@Entity('matches')
export class MatchesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    adversary_score: number;

    @Column({ type: 'int' })
    hcc_score: number;

    @Column('date')
    start_date: Date;

    @ManyToOne(() => AdversaryTeamsEntity, adversary_teams => adversary_teams.id)
    adversary: AdversaryTeamsEntity;

    @OneToMany(() => PlayEntity, play => play.match)
    plays: PlayEntity[];

}