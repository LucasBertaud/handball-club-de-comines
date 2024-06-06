import {Injectable} from "@nestjs/common";
import {MembersService} from "../../data/services/members.service";


@Injectable()
export class GetMembersByEmailUsecase {
    constructor(private membersService: MembersService) {
    }

    public execute(email: string): any {
        return this.membersService.findByEmail(email);
    }
}