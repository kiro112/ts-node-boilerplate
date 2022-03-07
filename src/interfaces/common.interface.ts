interface ApiResponse<T = any> {
    status: number;
    message: string;
    result: T;
}

export {
    ApiResponse,
};
