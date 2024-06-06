import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { MatchesEntity } from "../entities/matches.entity";
import { Matches } from "src/domain/models/matches";
import { AdversaryTeamsEntity } from "../entities/adversary_teams.entity";
import { PlayService } from "./play.service";

@Injectable()
export class MatchesService {
    constructor(
        @InjectRepository(MatchesEntity)
        private matchesRepository: Repository<MatchesEntity>,
        @InjectRepository(AdversaryTeamsEntity)
        private adversaryTeamsRepository: Repository<AdversaryTeamsEntity>,
        private playService: PlayService,
    ) {
    }

    async findAll(): Promise<MatchesEntity[]> {
        return this.matchesRepository.find();
    }

    async findById(id: number): Promise<MatchesEntity[]> {
        return this.matchesRepository.find({
            where: {
                id: id,
            },
        });
    }

    async createMatches(matches: Matches): Promise<any> {
        const adversary = await this.adversaryTeamsRepository.findOne({where: {id: matches.adversaryId}})
        const matchesEntity = this.matchesRepository.create({
            adversary: adversary,
            adversary_score: matches.adversary_score,
            hcc_score: matches.hcc_score,
            start_date: matches.start_date
        });
        const matchSaved = await this.matchesRepository.save(matchesEntity);
        matchSaved.id;
        matches.plays.forEach(e => {
            this.playService.createPlay({
                memberId: e,
                matchId: matchSaved.id
            });
        })
        return matchSaved;
    }

    async deleteMatches(id: number): Promise<void> {
        await this.matchesRepository.delete(id);
    }

    async updateMatches(id: number, matches: Partial<Matches>): Promise<any> {
        const match = await this.matchesRepository.findOne({ where: { id } });
        if (!match) {
            throw new NotFoundException(`Match with ID ${id} not found`);
        }
        Object.assign(match, matches);
        await this.matchesRepository.save(match);
        return match;
    }
}