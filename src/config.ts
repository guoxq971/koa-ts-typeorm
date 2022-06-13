import * as dotenv from "dotenv";

dotenv.config();
export const {PORT} = process.env;

import {DataSource} from "typeorm";
import {User} from "./entity/Uset";
import {useTool} from "./utils/useTool";

export let db = null;
export let AppDataSource: DataSource = null;

export function dbInit() {
  AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: ["src/entity/*.ts"],
    logging: true, // 是否打印日志
    logger: "advanced-console", // 日志类型
    synchronize: true, //自动创建模型
    entityPrefix: "test_", // 实体前缀
  });

  db = AppDataSource.initialize();
  db.then(async () => {
    //   const userRepository = AppDataSource.getRepository(User);
    //   for (let i = 0; i < 1; i++) {
    //     const user = new User();
    //     user.name = `user${i + 1}`;
    //     user.id = "e6de9113-1bc0-4552-b5f0-3ba32ca435ea";
    //     await userRepository.save(user);
    //   }
    //   let res = await userRepository.find();
    //   console.log("res", res);

    console.log("数据源已初始化!");
  }).catch((err) => {
    console.error("数据源初始化时出错", err);
  });
}
