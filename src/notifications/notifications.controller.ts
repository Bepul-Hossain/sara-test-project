/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";

@Controller('push')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-now')
  sendNow(@Body() dto: CreateNotificationDto) {
    return this.notificationsService.sendNow(dto.title, dto.message);
  }

  @Post('schedule')
  schedule(@Body() dto: CreateNotificationDto) {
    return this.notificationsService.schedule(dto.title, dto.message, dto.scheduleAt);
  }
}
