/* eslint-disable prettier/prettier */
// src/notifications/queue/producer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ProducerService {
  constructor(
    @InjectQueue('notification-queue') private readonly notificationQueue: Queue,
  ) {}

  async addNotificationJob(data: { title: string; message: string }, scheduleAt?: string) {
    if (scheduleAt) {
      const delay = new Date(scheduleAt).getTime() - Date.now();
      await this.notificationQueue.add('sendNotification', data, {
        delay,
        attempts: 3,
      });
    } else {
      await this.notificationQueue.add('sendNotification', data, {
        attempts: 3,
      });
    }
  }
}
