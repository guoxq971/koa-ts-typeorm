import { AppDataSource } from "src/config";
import { User } from "src/entity/Uset";

export default class userService {
  list = async ():Promise<User[]> => {
    return await AppDataSource.getRepository(User).find({ where: {} });
  };
  get = async (id):Promise<User> => {
    return await AppDataSource.getRepository(User).findOneBy({id: id});
  };
  remove = async (userDto: User):Promise<User> => {
    return await AppDataSource.getRepository(User).remove(userDto);
  };
  save = async (userDto: User):Promise<User> => {
    return await AppDataSource.getRepository(User).save(userDto);
  };
}
