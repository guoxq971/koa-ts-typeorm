import _ from "lodash";

export const useTool = {
  uuid: uuid,
  isEmptyPlus: isEmptyPlus,
};

function isEmptyPlus(argument): boolean {
  // 先判断是否为数字
  if (_.isNumber(argument)) {
    return false;
  }
  return _.isEmpty(argument);

}

function uuid(): string {
  let S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  // Generate a pseudo-GUID by concatenating random hexadecimal.
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
