import * as AWS from 'aws-sdk';
import { ObjectParams } from '../../../interfaces/services/aws/s3/s3.interface';
import { AWS_SERVICES_CONFIG } from '../../../config';

interface GetObjectParams extends ObjectParams {
    expiration?: number | undefined
}

const getSignedUrl = ({ bucket, filename, expiration = undefined }: GetObjectParams): string => {

    const s3 = new AWS.S3(AWS_SERVICES_CONFIG);

    const params = {
        Bucket: bucket, // eslint-disable-line @typescript-eslint/naming-convention
        Key: filename, // eslint-disable-line @typescript-eslint/naming-convention
        Expiration: expiration, // eslint-disable-line @typescript-eslint/naming-convention
    };

    return s3.getSignedUrl('getObject', params);
};

export {
    getSignedUrl,
};
