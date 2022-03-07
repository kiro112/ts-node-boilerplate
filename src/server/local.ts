import express from 'express';
import bootsrap from './bootstrap';

/**
 * Initialize Express Application
 */
const application: express.Application = express();

/**
 * Initialize Application Bootstrap
 */
bootsrap(application);

/**
 * ----------------------------
 * DO NOT EDIT BEYOND THIS LINE
 * ----------------------------
 */
const PORT = 5001;

/**
 * Start Local Server
 */
application.listen(PORT, (): void => {
    const message = `##### Candle Project Server Started at ${PORT} #####`;
    // eslint-disable-next-line no-console
    console.log(message);
});
