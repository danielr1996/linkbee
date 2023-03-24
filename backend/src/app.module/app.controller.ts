import { Controller, Get } from '@nestjs/common';
import { DashboardEntryRepository } from 'src/dashboardentry.module/dashboardentry.repository';

@Controller()
export class AppController {
  constructor(private repo: DashboardEntryRepository) {
    
  }

  @Get()
  async getHello(): Promise<any> {
    return this.repo.get()
  }
}
