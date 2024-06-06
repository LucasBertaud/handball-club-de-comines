import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [PresentationModule, DomainModule, DataModule],
  controllers: [],
  providers: [JwtStrategy],
  exports: [],
})
export class AppModule {}
