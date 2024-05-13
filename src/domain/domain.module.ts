import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateArticleUsecase} from "./usecases/create_article.usecase";
import {GetAllArticlesUsecase} from "./usecases/get_all_articles.usecase";
import {CreateMembersUsecase} from "./usecases/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/get_all_members.usecase";
import {GetAllAdversaryTeamsUsecase} from "./usecases/get_all_adversary_teams.usecase";
import {CreateAdversaryTeamsUsecase} from "./usecases/create_adversary_teams.usecase";
import { DeleteArticleUsecase } from "./usecases/delete_article.usecase";
import {GetAllPlayUsecase} from "./usecases/get_all_play.usecase";
import {CreatePlayUsecase} from "./usecases/create_play.usecase";
import { UpdateArticleUsecase } from "./usecases/update_article.usecase";
import { CreateMatchesUsecase } from "./usecases/create_matches.usecase";
import { GetAllMatchesUsecase } from "./usecases/get_all_matches.usecase";
import { DeleteMatchesUsecase } from "./usecases/delete_matches.usecase";
import { UpdateMatchUsecase } from "./usecases/update_match.usecase";

@Module({
    imports: [DataModule],
    providers: [
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase
    ],
    exports: [
        GetAllArticlesUsecase, CreateArticleUsecase, UpdateArticleUsecase, DeleteArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase,
        GetAllPlayUsecase, CreatePlayUsecase, CreateMatchesUsecase, GetAllMatchesUsecase, DeleteMatchesUsecase, UpdateMatchUsecase
    ],
})
export class DomainModule {
}
