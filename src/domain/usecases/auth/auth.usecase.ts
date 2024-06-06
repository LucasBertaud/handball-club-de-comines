import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MembersService } from '../../../data/services/members.service';

@Injectable()
export class LoginUsecase {
    constructor(
        private jwtService: JwtService, 
        private membersService: MembersService,
        private configService: ConfigService,
    ){}

    public async execute(email: string, password: string): Promise<any> {
        const member = await this.membersService.findByEmailAndPassword(email, password);
        const payload = {
            firstname: member.firstname,
            lastname: member.lastname,
            email: member.email,
            roles: [member.role],
        };

        return {
            access_token: this.jwtService.sign(payload, {
                secret: this.configService.get<string>('JWT_SECRET'),
                expiresIn: "1d"
            }),
        }
    }
}
