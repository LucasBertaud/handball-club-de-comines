import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { MatchesEntity } from "../entities/matches.entity";
import { Matches } from "src/domain/models/matches";

@Injectable()
export class MatchesService {
    constructor(
        @InjectRepository(MatchesEntity)
        private matchesRepository: Repository<MatchesEntity>,
    ) {
    }

    async findAll(): Promise<MatchesEntity[]> {
        return this.matchesRepository.find();
    }

    async createMatches(matches: Matches): Promise<any> {
        const matchesEntity = this.matchesRepository.create({
            adversary: matches.adversary,
            adversary_score: matches.adversary_score,
            hcc_score: matches.hcc_score,
            plays: matches.plays,
            start_date: matches.start_date
        });
        return this.matchesRepository.save(matchesEntity);
    }

    async deleteMatches(id: number): Promise<void> {
        await this.matchesRepository.delete(id);
    }

    async updateMatches(id: number, matches: Matches): Promise<void> {
        await this.matchesRepository.update(id, {
            adversary: matches.adversary,
            adversary_score: matches.adversary_score,
            hcc_score: matches.hcc_score,
            plays: matches.plays,
            start_date: matches.start_date
        })
    }
}