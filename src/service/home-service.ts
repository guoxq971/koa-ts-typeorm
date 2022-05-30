import { HttpException } from "src/middlewares/http-exception";

export default class HomeService {
  hello = () => {
    // 主动抛出错误
    if (true) {
      const error = new HttpException("登录错误");
      throw error;
    }
    return new Promise((resolve, rejects) => rejects("hello world"));
  };
}
