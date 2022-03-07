import { ApiResponse } from '../interfaces/common.interface';

class ResponseStore {
    private apiResponse: ApiResponse | undefined;

    setApiResponse(apiResponse: ApiResponse) {
        this.apiResponse = apiResponse;
    }

    getApiResponse() {
        return this.apiResponse;
    }
}

export default (
    new ResponseStore()
);
