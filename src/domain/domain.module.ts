import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateArticleUsecase} from "./usecases/article/create_article.usecase";
import {GetAllArticlesUsecase} from "./usecases/article/get_all_articles.usecase";
import {CreateMembersUsecase} from "./usecases/members/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/members/get_all_members.usecase";
import {GetAllAdversaryTeamsUsecase} from "./usecases/adversary_teams/get_all_adversary_teams.usecase";
import {CreateAdversaryTeamsUsecase} from "./usecases/adversary_teams/create_adversary_teams.usecase";
import {DeleteArticleUsecase} from "./usecases/article/delete_article.usecase";
import {GetAllPlayUsecase} from "./usecases/plays/get_all_play.usecase";
import {CreatePlayUsecase} from "./usecases/plays/create_play.usecase";
import {UpdateArticleUsecase} from "./usecases/article/update_article.usecase";
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
import { GetMembersByEmailUsecase } from "./usecases/get_members_by_email.usecase";
import {LoginUsecase} from "./usecases/auth/auth.usecase";
import {JwtService} from "@nestjs/jwt";
import {DeleteMembersUsecase} from "./usecases/members/delete_members.usecase";
import {UpdateMembersUsecase} from "./usecases/members/update_members.usecase";
import {DeleteAdversaryTeamsUsecase} from "./usecases/adversary_teams/delete_adversary_teams.usecase";
import {UpdatePlayUsecase} from "./usecases/plays/update_play.usecase";
import {DeletePlaysUsecase} from "./usecases/plays/delete_plays.usecase";

@Module({
    imports: [DataModule],
    providers: [
        JwtService,
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, UpdatePlayUsecase, DeletePlaysUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase, LoginUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase, DeleteAdversaryTeamsUsecase, GetMembersByEmailUsecase,
    ],
    exports: [
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, UpdatePlayUsecase, DeletePlaysUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase, LoginUsecase
        , GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase, DeleteAdversaryTeamsUsecase, GetMembersByEmailUsecase,
    ],
})
export class DomainModule {
}
