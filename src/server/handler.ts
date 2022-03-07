import http from 'http';
import awssls from 'aws-serverless-express';
import lambda from 'aws-lambda';
import * as server from './server';

/**
 * Lambda  Binary Mime Types
 */
const binaryMimeTypes: string[] = [];

/**
 * Decorate Express Application with Serverless Lambda
 */
const application = awssls.createServer(
    server.application,
    undefined,
    binaryMimeTypes
);

/**
 * Lambda HTTP Server
 *
 * @param event
 * @param context
 */
export const handler = (
    event: lambda.APIGatewayProxyEvent,
    context: lambda.Context,
): http.Server => awssls.proxy(application, event, context);
