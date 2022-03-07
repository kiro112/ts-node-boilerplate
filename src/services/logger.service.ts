import { createLogger, format, transports, Logger } from 'winston';
import RequestID from './request.id.service';

const { combine, timestamp, printf, splat, colorize } = format;
class LoggerService {

    private requestID: string = RequestID.getRequestID();
    public logger: Logger = createLogger();

    constructor() {

        this.logger = createLogger({
            format: combine(
                timestamp(),
                splat(),
                colorize(),
                this.tracerFormat
            ),
            transports: [new transports.Console()],
        });
    }

    public tracerFormat = printf((info) => {

        const infoTimestamp = 'timestamp';

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${info[infoTimestamp]} [request-id:${this.requestID}]: ${info.message}`;
    });

}

export {
    LoggerService,
};
