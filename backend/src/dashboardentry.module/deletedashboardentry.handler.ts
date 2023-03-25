import { Inject } from '@nestjs/common/decorators/core/inject.decorator'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import { PubSub } from 'graphql-subscriptions'
import { DashboardEntry } from './dashboardentry.dto'
import { DashboardEntryRepository } from './dashboardentry.repository'

export class DeleteDashboardEntryCommand {
    constructor(
        public readonly id: DashboardEntry['id'],
    ) { }
}

@CommandHandler(DeleteDashboardEntryCommand)
export class DeleteDashboardEntryHandler implements ICommandHandler<DeleteDashboardEntryCommand> {
    constructor(private dashboardRepo: DashboardEntryRepository,
        @Inject('PUB_SUB') private pubSub: PubSub,
        ){}
    async execute({id}: DeleteDashboardEntryCommand) {
        this.dashboardRepo.delete(id)
        this.pubSub.publish('dashboardEntry', { dashboardEntry: this.dashboardRepo.get()})
    }
}