# 遇到的问题

## Error: Failed to parse URL from "/api/xxx"

![报错截图](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20230922184815.png)
![使用截图](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20230922190344.png)

在`localhost`服务下，在服务端组件中使用`fetch`需要填写绝对路径。具体原因查阅 [issue](https://github.com/vercel/next.js/issues/44062)
**解决方案：**
在 `.env` 文件添加 `URL=http://localhost:3000`，并改写成以下写法
![解决方案](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20230922190148.png)
