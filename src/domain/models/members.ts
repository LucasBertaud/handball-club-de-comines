import {NewsEntity} from "../../data/entities/news.entity";
import {PlayEntity} from "../../data/entities/play.entity";

export class Members {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    role: string;
    birthdate: Date;
    register_date: Date;

    constructor(
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        role: string,
        birthdate: Date,
        register_date: Date,
    ){
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.role = role;
        this.birthdate = birthdate;
        this.register_date = register_date;
    }
}