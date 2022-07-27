import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { BrokerService } from './broker.service';
import { ListenerService } from 'src/rabbit_listener/rabbit_listener.service';
import { ConsentService } from 'src/consents/consents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Consent, ConsentSchema } from '../consents/entities/consent.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Consent.name, schema: ConsentSchema }]),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: process.env.EXCHANGE_NAME,
          type: 'direct',
        },
      ],
      uri: process.env.RABBITMQ_URI,
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [BrokerService, ListenerService, ConsentService],
  exports: [BrokerService],
})
export class BrokerModule {}
