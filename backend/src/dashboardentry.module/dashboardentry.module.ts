import { Module } from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs'
import { DeleteDashboardEntryHandler } from './deletedashboardentry.handler';
import { DashboardEntryRepository } from './dashboardentry.repository';
import { PutDashboardEntryHandler } from './putdashboardentry.handler';

@Module({
  imports: [CqrsModule],
  providers: [PutDashboardEntryHandler, DeleteDashboardEntryHandler, DashboardEntryRepository],
  exports: [DashboardEntryRepository]
})
export class DashboardEntryModule {}
