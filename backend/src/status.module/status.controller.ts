import { Controller, Get } from "@nestjs/common";

@Controller('/status')
export class StatusController {
    
    @Get('health')
    health(){
        return {health: true}
    }
    
    @Get('ready')
    ready(){
        return {ready: true}
    }
}