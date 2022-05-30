class HttpException extends Error {
  msg: string;
  code: number;
  errorCode: number;
  constructor(msg = "服务器异常", errorCode = 1, code = 200) {
    super();
    this.msg = msg;
    this.code = code;
    this.errorCode = errorCode;
  }
}
export { HttpException };
