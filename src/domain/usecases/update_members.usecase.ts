import { Injectable } from '@nestjs/common';
import { Members } from '../models/members';
import { MembersService } from 'src/data/services/members.service';

@Injectable()
export class UpdateMembersUsecase {
    constructor(private membersService: MembersService) { }
    public execute(email: string, membersData: Partial<Members>): Promise<Members> {
        return this.membersService.updateMembers(email, membersData);
    }
}
