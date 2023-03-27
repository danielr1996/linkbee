import {Resolver, ResolveField, Args, Query, Subscription} from '@nestjs/graphql'
import { DashboardEntry } from './dashboardentry.dto';
import { DashboardEntryRepository } from './dashboardentry.repository';
import {PubSub} from 'graphql-subscriptions'
import { Inject } from '@nestjs/common';

@Resolver(() => DashboardEntry)
export class DashboardEntryResolver {
  constructor(
    private repo: DashboardEntryRepository,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {
  }
  

  @Query(() => [DashboardEntry])
  async dashboardEntry() {
    return this.repo.get()
  }

  @Subscription(()=>[DashboardEntry],{name: 'dashboardEntry'})
  dashboardEntrySub(){
    return this.pubSub.asyncIterator('dashboardEntry')
  }
}