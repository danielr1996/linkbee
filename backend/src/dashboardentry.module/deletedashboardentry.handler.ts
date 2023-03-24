import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import { DashboardEntry } from './dashboardentry.dto'
import { DashboardEntryRepository } from './dashboardentry.repository'

export class DeleteDashboardEntryCommand {
    constructor(
        public readonly id: DashboardEntry['id']
    ) { }
}

@CommandHandler(DeleteDashboardEntryCommand)
export class DeleteDashboardEntryHandler implements ICommandHandler<DeleteDashboardEntryCommand> {
    constructor(private dashboardRepo: DashboardEntryRepository){}
    async execute({id}: DeleteDashboardEntryCommand) {
        this.dashboardRepo.delete(id)
    }
}