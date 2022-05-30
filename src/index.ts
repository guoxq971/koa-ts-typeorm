import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { dbInit, PORT } from "./config";
import AppRoutes from "./routes";
import { catchError } from "./middlewares/catcherror";

const app = new Koa();
const router = new Router();

dbInit();

// 全局异常处理
app.use(catchError);

//路由
AppRoutes.forEach((route) => router[route.method](route.path, route.action));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
