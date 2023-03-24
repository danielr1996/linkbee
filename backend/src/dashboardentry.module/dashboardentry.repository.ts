import { Injectable } from "@nestjs/common";
import { DashboardEntry } from "./dashboardentry.dto";


@Injectable()
export class DashboardEntryRepository {
    private map: Map<string, DashboardEntry> = new Map()

    public get(): DashboardEntry[]{
        return [...this.map.values()]
    }

    public update(dashboardentry: DashboardEntry): DashboardEntry{
        this.map.set(dashboardentry.id,dashboardentry)
        return dashboardentry
    }


    public delete(id: DashboardEntry['id']): void{
        this.map.delete(id)
    }
}