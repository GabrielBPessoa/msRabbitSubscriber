import { Module } from '@nestjs/common';
import { ConsentService } from './consents.service';
import { ConsentsController } from './consents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consent, ConsentSchema } from './entities/consent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Consent.name, schema: ConsentSchema }]),
  ],
  controllers: [ConsentsController],
  providers: [ConsentService],
})
export class ConsentsModule {}
