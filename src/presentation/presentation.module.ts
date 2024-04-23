import {Module} from "@nestjs/common";
import {DomainModule} from "src/domain/domain.module";
import {ArticlesController} from "./articles.controller";
import {MembersController} from "./members.controller";
import {AdversaryTeamsController} from "./adversaryTeams.controller";

@Module({
    imports: [DomainModule],
    controllers: [
        ArticlesController,
        MembersController,
        AdversaryTeamsController,
    ],
    providers: [],
})
export class PresentationModule {
}
