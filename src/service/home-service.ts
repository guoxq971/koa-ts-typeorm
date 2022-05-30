import { AppDataSource, db } from "src/config";
import { User } from "src/entity/Uset";
import { HttpException } from "src/middlewares/http-exception";
import { DataSource, Repository } from "typeorm";

export default class HomeService {
  hello = async () => {
    // 主动抛出错误
    if (false) {
      const error = new HttpException("登录错误");
      throw error;
    }
    let res = await AppDataSource.getRepository(User).find();

    return res;
  };
}
