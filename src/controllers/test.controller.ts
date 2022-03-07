import { Request, Response } from 'express';
import { sendResponse } from '../services/response.service';

import {
    StatusCodes,
} from 'http-status-codes';

export const testEndpoint = (_request: Request, _response: Response): void => {
    const status = StatusCodes.OK;
    const message = 'General response message';

    const result = {
        message: 'result-data',
    };

    sendResponse(_response, status, message, result);
};
