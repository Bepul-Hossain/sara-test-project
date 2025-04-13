/* eslint-disable prettier/prettier */
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { FirebaseService } from '../../firebase/firebase.service';
import { UserService } from '../../user/user.service';

@Processor('notification-queue')
export class ConsumerService {
  constructor(private readonly firebaseService: FirebaseService, private userService: UserService) {}

  @Process('sendNotification')
  async handleNotification(job: Job) {
    const { title, message } = job.data;
    const users = this.userService.findAll();

    for (const user of users) {
      await this.firebaseService.sendNotification(user.deviceToken, title, message);
    }
  }
}
