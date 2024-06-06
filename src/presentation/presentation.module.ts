import {Module} from "@nestjs/common";
import {DomainModule} from "src/domain/domain.module";
import {MembersController} from "./members.controller";
import {AdversaryTeamsController} from "./adversaryTeams.controller";
import {PlayController} from "./play.controller";
import {MatchesController} from "./matches.controller";
import {NewsController} from "./news.controller";
import {AuthController} from "./auth/auth.controller";

@Module({
    imports: [DomainModule],
    controllers: [
        MembersController,
        AdversaryTeamsController,
        PlayController,
        MatchesController,
        NewsController,
        AuthController,
    ],
    providers: [],
})
export class PresentationModule {
}
