import { MembersEntity } from "src/data/entities/members.entity";

export class News {
  title: string;
  image: string;
  content: string;
  publication_date: Date;
  member: MembersEntity;

  constructor(
    title: string,
    image: string,
    content: string,
    publication_date: Date,
    member: MembersEntity,
  ) {
      this.title = title;
      this.image = image;
      this.content = content;
      this.publication_date = publication_date;
      this.member = member;
  }
}