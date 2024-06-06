import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUsecase } from 'src/domain/usecases/auth/auth.usecase';
import { AuthMemberDto } from '../dtos/auth_member.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

     constructor(private loginUsecase: LoginUsecase){}

    @Post()
    async login(
        @Body() dto: AuthMemberDto
    ){
        const {email, password} = dto;
        return this.loginUsecase.execute(email, password);
    }
}
