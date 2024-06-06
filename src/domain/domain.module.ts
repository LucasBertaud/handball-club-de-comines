import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateArticleUsecase} from "./usecases/article/create_article.usecase";
import {GetAllArticlesUsecase} from "./usecases/article/get_all_articles.usecase";
import {CreateMembersUsecase} from "./usecases/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/get_all_members.usecase";
import {GetAllAdversaryTeamsUsecase} from "./usecases/adversary_teams/get_all_adversary_teams.usecase";
import {CreateAdversaryTeamsUsecase} from "./usecases/adversary_teams/create_adversary_teams.usecase";
import {DeleteArticleUsecase} from "./usecases/article/delete_article.usecase";
import {GetAllPlayUsecase} from "./usecases/get_all_play.usecase";
import {CreatePlayUsecase} from "./usecases/create_play.usecase";
import {UpdateArticleUsecase} from "./usecases/article/update_article.usecase";
import {CreateMatchesUsecase} from "./usecases/create_matches.usecase";
import {GetAllMatchesUsecase} from "./usecases/get_all_matches.usecase";
import {DeleteMatchesUsecase} from "./usecases/delete_matches.usecase";
import {GetAllNewsUsecase} from "./usecases/news/get_all_news.usecase";
import {CreateNewsUsecase} from "./usecases/news/create_news.usecase";
import {UpdateMatchUsecase} from "./usecases/update_match.usecase";
import {DeleteNewsUsecase} from "./usecases/news/delete_news.usecase";
import {UpdateNewsUsecase} from "./usecases/news/update_news.usecase";
import {GetNewsByIdUsecase} from "./usecases/news/get_news_by_id.usecase";
import {GetAdversaryTeamsByIdUsecase} from "./usecases/adversary_teams/get_adversary_teams_by_id.usecase";
import {UpdateAdversaryTeamsUsecase} from "./usecases/adversary_teams/update_adversary_teams.usecase";
import { DeleteMembersUsecase } from "./usecases/delete_members.usecase";
import { UpdateMembersUsecase } from "./usecases/update_members.usecase";

@Module({
    imports: [DataModule],
    providers: [
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase,
    ],
    exports: [
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase, UpdateAdversaryTeamsUsecase, GetAdversaryTeamsByIdUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase,
        GetAllNewsUsecase, GetNewsByIdUsecase, CreateNewsUsecase, DeleteNewsUsecase, UpdateNewsUsecase,
        DeleteMembersUsecase, UpdateMembersUsecase,
    ],
})
export class DomainModule {
}
