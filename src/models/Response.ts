export class Response<T> {
  public success: boolean;
  public data?: T;
  public error?: string;
}
