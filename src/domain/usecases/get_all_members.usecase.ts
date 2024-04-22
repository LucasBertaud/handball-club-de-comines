import {Injectable} from "@nestjs/common";
import {MembersService} from "../../data/services/members.service";

@Injectable()
export class GetAllMembersUsecase {
    constructor(private membersService: MembersService) {
    }

    public execute(): any {
        return this.membersService.findAll();
    }
}