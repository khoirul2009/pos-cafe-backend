export class HttpException extends Error {
  statusCode: number;
  constructor(code: number, message: string) {
    super(message);
    this.statusCode = code;
  }

  static badRequest(message: string) {
    return new HttpException(400, message);
  }

  static notFound(message: string) {
    return new HttpException(404, message);
  }
}
