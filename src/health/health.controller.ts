import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'health-check',
  version: '1'
})
export class HealthController {
  @Get()
  healthCheck(): string {
    return "OK";
  }
}
