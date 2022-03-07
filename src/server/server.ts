import express from 'express';
import bootsrap from './bootstrap';

/**
 * Initialize Express Application
 */
export const application: express.Application = express();

/**
 * Initialize Application Bootstrap
 */
bootsrap(application);
