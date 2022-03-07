const accessKeyId = process.env.ACCESS_ID;
const secretAccessKey = process.env.ACCESS_KEY;
const region = process.env.REGION;

const appLimit = process.env.APP_LIMIT || '10mb';

const AWS_SERVICES_CONFIG = {
    accessKeyId,
    secretAccessKey,
    region,
};

export {
    appLimit,
    AWS_SERVICES_CONFIG,
};
