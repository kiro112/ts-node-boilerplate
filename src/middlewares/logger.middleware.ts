import express from 'express';
import { LogService } from '../services/log.service';
import ResponseStore from '../helpers/response.store.helper';

const logger = (
    _request: express.Request,
    _response: express.Response,
    next: express.NextFunction): void => {

    const requestHeaders = _request.headers;
    const requestQuery = _request.query;
    const requestBody = _request.body as unknown;

    new LogService();

    const logService = LogService.getInstance();

    logService.logger.info('--- START ----');
    logService.logger.info('App Headers: %o', requestHeaders);
    logService.logger.info('App Query: %o', requestQuery);
    logService.logger.info('App Body: %o', requestBody);

    _response.on('finish', () => {
        logService.logger.info('App Response: %o', ResponseStore.getApiResponse());
        logService.logger.info('--- END ---');
    });

    next();
};

export {
    logger,
};
