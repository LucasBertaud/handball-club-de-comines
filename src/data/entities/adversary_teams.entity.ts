import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MatchesEntity } from './matches.entity';


@Entity("adversary_teams")
export class AdversaryTeamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  logo: string;

  @OneToMany(() => MatchesEntity, matches => matches.adversary)
  matches: MatchesEntity[];

}