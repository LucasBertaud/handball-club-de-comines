import {NewsEntity} from "../../data/entities/news.entity";
import {PlayEntity} from "../../data/entities/play.entity";

export class CreateMembersDto {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    role: string;
    birthdate: Date; // A mettre en string -> Date
    register_date: Date; // A mettre en string -> Date
} 