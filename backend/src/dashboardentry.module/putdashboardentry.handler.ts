import { Inject } from '@nestjs/common'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import { PubSub } from 'graphql-subscriptions'
import { DashboardEntry } from './dashboardentry.dto'
import { DashboardEntryRepository } from './dashboardentry.repository'


export class PutDashboardEntryCommand {
    constructor(
        public readonly dashboardentry: DashboardEntry,
    ) { }
}

@CommandHandler(PutDashboardEntryCommand)
export class PutDashboardEntryHandler implements ICommandHandler<PutDashboardEntryCommand> {
    constructor(
        private dashboardRepo: DashboardEntryRepository,
        @Inject('PUB_SUB') private pubSub: PubSub,
        ){}
    async execute({dashboardentry}: PutDashboardEntryCommand) {
        console.log(dashboardentry)
        this.dashboardRepo.update(dashboardentry)
        this.pubSub.publish('dashboardEntry', { dashboardEntry: this.dashboardRepo.get()})
    }
}