import {Injectable} from "@nestjs/common";
import {MembersService} from "../../../data/services/members.service";
import {Members} from "../../models/members";

@Injectable()
export class CreateMembersUsecase {
    constructor(private membersService: MembersService) {
    }

    public execute(members: Members): any {
        return this.membersService.createMember(members);
    }
}