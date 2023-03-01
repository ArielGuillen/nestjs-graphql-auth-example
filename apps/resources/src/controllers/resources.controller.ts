import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('resources')
export class ResourcesController {
  @EventPattern('resource_created')
  async handleUserCreated(data) {
    console.log('Data received:', data);
  }
}
