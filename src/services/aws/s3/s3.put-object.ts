import * as AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { ObjectParams } from '../../../interfaces/services/aws/s3/s3.interface';
import { AWS_SERVICES_CONFIG } from '../../../config';

interface PutObjectParams extends ObjectParams {
    content: AWS.S3.Body,
    acl?: AWS.S3.ObjectCannedACL
}

const putObject = async ({
    bucket,
    filename,
    content,
    acl = 'private',
}: PutObjectParams): Promise<PromiseResult<AWS.S3.PutObjectOutput, AWS.AWSError>> => {

    const s3 = new AWS.S3(AWS_SERVICES_CONFIG);

    const params = {
        Bucket: bucket, // eslint-disable-line @typescript-eslint/naming-convention
        Key: filename, // eslint-disable-line @typescript-eslint/naming-convention
        Body: content, // eslint-disable-line @typescript-eslint/naming-convention
        ACL: acl, // eslint-disable-line @typescript-eslint/naming-convention
        ContentEncoding: 'base64', // eslint-disable-line @typescript-eslint/naming-convention
    };

    return await s3.putObject(params).promise();
};

export {
    putObject,
};
