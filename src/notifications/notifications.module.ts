// src/notifications/notifications.module.ts

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ProducerService } from './queue/producer.service';
import { ConsumerService } from './queue/consumer.service';
import { FirebaseService } from '../firebase/firebase.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'notification-queue',
    }),
    UserModule,
  ],
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    ProducerService,
    ConsumerService,
    FirebaseService,
  ],
})
export class NotificationsModule {}
