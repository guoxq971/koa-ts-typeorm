import * as dotenv from "dotenv";

dotenv.config();

export const { PORT } = process.env;

import { DataSource } from "typeorm";

export function dbInit() {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: ["src/entity/*.ts"],
    logging: true, // 是否打印日志
    synchronize: true, //自动创建模型
    entityPrefix: "test_", // 实体前缀
  });

  AppDataSource.initialize()
    .then(() => {
      console.log("数据源已初始化!");
    })
    .catch((err) => {
      console.error("数据源初始化时出错", err);
    });
}
