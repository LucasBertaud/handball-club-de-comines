import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("article")
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  content: string;
}