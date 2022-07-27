import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BrokerModule } from './broker/broker.module';
import { ConsentsModule } from './consents/consents.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ListenerService } from './rabbit_listener/rabbit_listener.service';
import { ConsentService } from './consents/consents.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    BrokerModule,
    ConsentsModule,
    MongooseModule.forRoot(process.env.DB_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
