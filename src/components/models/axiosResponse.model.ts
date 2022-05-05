export interface AxiosResponse {
  status: number;
  statusText: string;
  headers: Headers;
  request: Request;
}
