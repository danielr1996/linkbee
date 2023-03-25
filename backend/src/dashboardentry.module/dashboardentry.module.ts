import { Module } from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs'
import { DeleteDashboardEntryHandler } from './deletedashboardentry.handler';
import { DashboardEntryRepository } from './dashboardentry.repository';
import { PutDashboardEntryHandler } from './putdashboardentry.handler';
import { DashboardEntryResolver } from './dashboardentry.resolver';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [CqrsModule],
  providers: [PutDashboardEntryHandler, DeleteDashboardEntryHandler, DashboardEntryRepository, DashboardEntryResolver, {
    provide: 'PUB_SUB',
    useValue: new PubSub(),
  }],
  exports: [DashboardEntryRepository]
})
export class DashboardEntryModule {}
