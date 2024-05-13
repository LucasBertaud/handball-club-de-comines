import {MembersEntity} from "../../data/entities/members.entity";

export class CreateNewsDto {
    title: string;
    image: string;
    content: string;
    publication_date: Date;
    member: MembersEntity;
}