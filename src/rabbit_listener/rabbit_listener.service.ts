import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { ConsentService } from 'src/consents/consents.service';
@Injectable()
export class ListenerService {
  constructor(private readonly consentService: ConsentService) {}

  @RabbitSubscribe({
    exchange: 'consent_exchange',
    routingKey: 'consent_routing_key',
    queue: 'consent-queue',
  })
  public async receiveFromQueue(payload: {}) {
    try {
      console.log('Recebido na Queue: ', payload);
      const createConsentFromQueue = await this.consentService.create(payload);
      return;
    } catch (e: any) {
      return console.log(e);
    }
  }
}
