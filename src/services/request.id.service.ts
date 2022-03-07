import { v4 } from 'uuid';
const rid = v4();

class RequestID {
    private requestID: string;
    constructor(requestID: string = rid) {
        this.requestID = requestID;
    }

    setRequestID(requestID: string = rid) {
        this.requestID = requestID;
    }

    getRequestID() {
        return this.requestID;
    }

}

export default (new RequestID());
