import { Injectable } from '@nestjs/common';
import { MembersService } from 'src/data/services/members.service';

@Injectable()
export class DeleteMembersUsecase {
    constructor(private membersService: MembersService) { }
    public execute(email: string): any {
        return this.membersService.deleteMember(email);
    }
}
