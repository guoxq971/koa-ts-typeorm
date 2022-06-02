import { User } from "src/entity/Uset";
import { HttpException } from "src/middlewares/http-exception";
import { success } from "src/middlewares/http-success";
import { useTool } from "src/utils/useTool";
import UserService from "../service/user-service";

class userController {
  private service: UserService = new UserService();

  list = async (ctx) => {
    const body = ctx.request.body;
    let user = await this.service.list();
    ctx.body = new success(user);
  };
  get = async (ctx) => {
    const { id } = ctx.params;
    if (useTool.isEmptyPlus(id)) throw new HttpException("id不能为空");
    let user = await this.service.get(id);
    if (useTool.isEmptyPlus(user)) throw new HttpException("用户不存在");
    ctx.body = new success(user);
  };
  save = async (ctx) => {
    const body: User = ctx.request.body;
    if (useTool.isEmptyPlus(body)) throw new HttpException("参数不能为空");
    if (useTool.isEmptyPlus(body.id)) delete body.id;
    let user = await this.service.save(body);
    user = await this.service.get(user.id);
    ctx.body = new success(user);
  };
  remove = async (ctx) => {
    const { id } = ctx.params;
    if (useTool.isEmptyPlus(id)) throw new HttpException("id不能为空");
    let user = await this.service.get(id);
    if (useTool.isEmptyPlus(user)) throw new HttpException("用户不存在");
    user = await this.service.remove(user);
    ctx.body = new success(user);
  };
}
export default new userController();
