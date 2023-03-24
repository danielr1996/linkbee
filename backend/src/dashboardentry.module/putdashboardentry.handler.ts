import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import { DashboardEntry } from './dashboardentry.dto'
import { DashboardEntryRepository } from './dashboardentry.repository'

export class PutDashboardEntryCommand {
    constructor(
        public readonly dashboardentry: DashboardEntry
    ) { }
}

@CommandHandler(PutDashboardEntryCommand)
export class PutDashboardEntryHandler implements ICommandHandler<PutDashboardEntryCommand> {
    constructor(private dashboardRepo: DashboardEntryRepository){}
    async execute({dashboardentry}: PutDashboardEntryCommand) {
        this.dashboardRepo.update(dashboardentry)
    }
}