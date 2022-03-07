import { LoggerService } from './logger.service';

class LogService {

    private static instance: LoggerService;

    constructor() {
        if (!LogService.instance) {
            LogService.instance = new LoggerService();
        }
    }

    public static getInstance(): LoggerService {
        return LogService.instance;
    }

}

export {
    LogService,
};
