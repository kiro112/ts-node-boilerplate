import * as AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { ObjectParams } from '../../../interfaces/services/aws/s3/s3.interface';
import { AWS_SERVICES_CONFIG } from '../../../config';

interface GetObjectParams extends ObjectParams {
    acl?: AWS.S3.ObjectCannedACL
}

const getObject = async ({
    bucket,
    filename,
}: GetObjectParams):
    Promise<PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError>> => {

    const s3 = new AWS.S3(AWS_SERVICES_CONFIG);

    const params = {
        Bucket: bucket, // eslint-disable-line @typescript-eslint/naming-convention
        Key: filename, // eslint-disable-line @typescript-eslint/naming-convention
    };

    return await s3.getObject(params).promise();
};

export {
    getObject,
};
