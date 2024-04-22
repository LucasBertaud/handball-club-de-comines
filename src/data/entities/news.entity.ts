import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MembersEntity } from './members.entity';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  image: string;

  @Column('text')
  content: string;

  @Column('date')
  publication_date: Date;

  @ManyToOne(type => MembersEntity, member => member.news)
  member: MembersEntity;
}