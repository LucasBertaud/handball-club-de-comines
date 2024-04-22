import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("adversary_teams")
export class AdversaryTeamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  logo: string;
}