import { HttpException } from "./http-exception";
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // console.log("捕获到异常");
    if (error instanceof HttpException) {
      return (ctx.body = {
        msg: error.msg,
        code: error.errorCode,
      });
    } else {
      return (ctx.body = {
        msg: "系统错误",
        code: 200,
      });
    }
  }
};
export { catchError };
