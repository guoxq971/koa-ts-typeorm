import homeController from "./controller/home-controller";
import userController from "./controller/user-controller";

export default [
  {
    path: "/",
    method: "get",
    action: homeController.hello,
  },
  {
    path: "/user/get/:id",
    method: "get",
    action: userController.get,
  },
  {
    path: "/user/remove/:id",
    method: "get",
    action: userController.get,
  },
  {
    path: "/user/save",
    method: "post",
    action: userController.save,
  },
  {
    path: "/user/list",
    method: "post",
    action: userController.list,
  },
];
