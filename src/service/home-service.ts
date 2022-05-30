import { AppDataSource } from "src/config";
import { User } from "src/entity/Uset";
import { HttpException } from "src/middlewares/http-exception";

export default class HomeService {
  hello = async () => {
    // 主动抛出错误
    if (false) {
      throw new HttpException("登录错误");
    }
    let res = await AppDataSource.getRepository(User).find();

    return res;
  };
}
