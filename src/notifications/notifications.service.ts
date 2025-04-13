/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { FirebaseService } from "../firebase/firebase.service";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class NotificationsService {
  constructor(
    private readonly userService: UserService,
    private readonly firebaseService: FirebaseService,
    @InjectQueue('notification-queue') private notificationQueue: Queue,
  ) {}

  async sendNow(title: string, message: string) {
    const users = this.userService.findAll();
    for (const user of users) {
      await this.firebaseService.sendNotification(user.deviceToken, title, message);
    }
  }

  async schedule(title: string, message: string, scheduleAt: string) {

    await this.notificationQueue.add('sendNotification', { title, message }, {
      delay: new Date(scheduleAt).getTime() - Date.now(),
      attempts: 3,
    });
  }
}
