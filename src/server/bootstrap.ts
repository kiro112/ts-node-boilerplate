import express from 'express';
import parser from  'body-parser';

import testRouter from '../routers/test.router';

import { logger as loggerMiddeware } from '../middlewares/logger.middleware';

import { appLimit } from '../config';

/**
 * Setup All Endpoint Handlers and Global Middlewares
 *
 * @param application
 */
const bootstrap = (application: express.Application): void => {
    /**
     * Setup Body Parser Middlerwares
     */
    application.use(parser.urlencoded({ extended: true }));
    application.use(parser.json({ limit: appLimit }));

    /**
     * Setup Customize middlewares
     */
    application.use(loggerMiddeware);

    /**
     * Setup Endpoint Route Handler
     */
    application.use('/test', testRouter);
};

export default bootstrap;
