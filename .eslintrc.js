module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  //此项是用来指定eslint解析器的，解析器必须符合规则
  // parser: "vue-eslint-parser",
  //此项是用来指定javaScript语言类型和风格
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module", //用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    allowImportExportEverywhere: true, // 不限制eslint对import使用位置
    ecmaFeatures: {
      modules: true,
      legacyDecorators: true,
    },
  },
  extends: [
    "prettier", //使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
  ],
  // 此项是用来提供插件的
  plugins: [],
  rules: {
    //"off" 或者 0：关闭规则。
    // "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
    // "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。

    // never 不需要
    // always 需要

    "space-infix-ops": 1, //要求操作符周围有空格
    "new-parens": 1, //要求调用无参构造函数时有圆括号
    "no-multiple-empty-lines": 1, //禁止出现多行空行
    "keyword-spacing": 1, //强制在关键字前后使用一致的空格
    "key-spacing": 1, //强制在对象字面量的属性中键和值之间使用一致的间距
    "implicit-arrow-linebreak": 1, //强制隐式返回的箭头函数体的位置
    "function-paren-newline": [1, "never"], //强制在函数括号内使用一致的换行
    "func-call-spacing": 1, //要求在函数标识符和其调用之间有空格
    "no-multi-spaces": 2, //禁止使用多个空格
    "no-mixed-spaces-and-tabs": 2, //禁止空格和 tab 的混合缩进
    indent: [2, 2], //强制统一缩进
    quotes: [1, "single"], //单引号
    semi: [2, "always"], //语句强制分号结尾
    // 函数前的空格 const test = async ()=>{}
    "space-before-function-paren": [
      2,
      {
        anonymous: "always", //匿名函数表达式（例如function () {}）
        named: "always", //命名函数表达式（例如function foo () {}）
        asyncArrow: "always", //异步箭头函数表达式（例如async () => {}
      },
    ],
    // 大括号内的间距一致 const obj = { name:'zhangsan' }
    "object-curly-spacing": [2, "always"],
  },
};
