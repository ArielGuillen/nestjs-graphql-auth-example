import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @EventPattern('user_created')
  async handleUserCreated(data) {
    console.log('Data received:', data);
  }
}
