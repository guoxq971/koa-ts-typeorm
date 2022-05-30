import { AppDataSource } from "src/config";
import { User } from "src/entity/Uset";

export default class userService {
  get = async (id) => {
    return AppDataSource.getRepository(User).findOne({ where: { id: id } });
  };
  remove = async (userDto: User) => {
    return AppDataSource.getRepository(User).remove(userDto);
  };
  save = async (userDto: User) => {
    return AppDataSource.getRepository(User).save(userDto);
  };
}
