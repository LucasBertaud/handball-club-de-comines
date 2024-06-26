import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateMembersUsecase} from "./usecases/members/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/members/get_all_members.usecase";
import {GetAllAdversaryTeamsUsecase} from "./usecases/adversary_teams/get_all_adversary_teams.usecase";
import {CreateAdversaryTeamsUsecase} from "./usecases/adversary_teams/create_adversary_teams.usecase";
import {GetAllPlayUsecase} from "./usecases/plays/get_all_play.usecase";
import {CreatePlayUsecase} from "./usecases/plays/create_play.usecase";
import {CreateMatchesUsecase} from "./usecases/matches/create_matches.usecase";
import {GetAllMatchesUsecase} from "./usecases/matches/get_all_matches.usecase";
import {DeleteMatchesUsecase} from "./usecases/matches/delete_matches.usecase";
import {GetAllNewsUsecase} from "./usecases/news/get_all_news.usecase";
import {CreateNewsUsecase} from "./usecases/news/create_news.usecase";
import {UpdateMatchUsecase} from "./usecases/matches/update_match.usecase";
import {DeleteNewsUsecase} from "./usecases/news/delete_news.usecase";
import {UpdateNewsUsecase} from "./usecases/news/update_news.usecase";
import {GetNewsByIdUsecase} from "./usecases/news/get_news_by_id.usecase";
import {GetAdversaryTeamsByIdUsecase} from "./usecases/adversary_teams/get_adversary_teams_by_id.usecase";
import {UpdateAdversaryTeamsUsecase} from "./usecases/adversary_teams/update_adversary_teams.usecase";
import {GetMembersByEmailUsecase} from "./usecases/members/get_members_by_email.usecase";
import {LoginUsecase} from "./usecases/auth/auth.usecase";
import {JwtService} from "@nestjs/jwt";
import {DeleteMembersUsecase} from "./usecases/members/delete_members.usecase";
import {UpdateMembersUsecase} from "./usecases/members/update_members.usecase";
import {DeleteAdversaryTeamsUsecase} from "./usecases/adversary_teams/delete_adversary_teams.usecase";
import {UpdatePlayUsecase} from "./usecases/plays/update_play.usecase";
import {DeletePlaysUsecase} from "./usecases/plays/delete_plays.usecase";
import {ConfigModule} from "@nestjs/config";
import {GetMatchesByIdUsecase} from "./usecases/matches/get_matches_by_id.usecase";
import {GetPlayByIdUsecase} from "./usecases/plays/get_play_by_id.usecase";


@Module({
    imports: [ConfigModule.forRoot(), DataModule],
    providers: [
        JwtService,
        GetAllMembersUsecase, GetMembersByEmailUsecase, CreateMembersUsecase, UpdateMembersUsecase, DeleteMembersUsecase,
        GetAllAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, DeleteAdversaryTeamsUsecase,
        GetAllPlayUsecase, GetPlayByIdUsecase, CreatePlayUsecase, UpdatePlayUsecase, DeletePlaysUsecase,
        GetAllMatchesUsecase, GetMatchesByIdUsecase, CreateMatchesUsecase, UpdateMatchUsecase, DeleteMatchesUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        LoginUsecase,
    ],
    exports: [
        GetAllMembersUsecase, GetMembersByEmailUsecase, CreateMembersUsecase, UpdateMembersUsecase, DeleteMembersUsecase,
        GetAllAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, DeleteAdversaryTeamsUsecase,
        GetAllPlayUsecase, GetPlayByIdUsecase, CreatePlayUsecase, UpdatePlayUsecase, DeletePlaysUsecase,
        GetAllMatchesUsecase, GetMatchesByIdUsecase, CreateMatchesUsecase, UpdateMatchUsecase, DeleteMatchesUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        LoginUsecase,
    ],
})
export class DomainModule {
}