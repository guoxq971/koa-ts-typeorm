class success {
  msg: string;
  code: number;
  data?: any;
  constructor(data = "", msg = "", code = 0) {
    this.data = data;
    this.msg = msg;
    this.code = code;
  }
}
export { success };
