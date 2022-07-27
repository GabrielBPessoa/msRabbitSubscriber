import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}
}
