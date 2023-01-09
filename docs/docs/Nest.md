# Nest

## 介绍

Nest.js 是一个可以在 TypeScript 和 JavaScript之上构建高效、可扩展的 Node.js 服务器端应用程序的框架。

## 起步

::: warning
  请确保您的操作系统上安装了 Node.js（>= 12, v13 版本除外）。
:::

首先全局安装 `nest`

```bash
npm i -g @nestjs/cli
```

初始化项目

```bash
nest new project-name
```

启动项目

```bash
npm run start:dev # 热更新启动
```

启动项目后，默认端口为`src/main.ts`文件中定义的端口号，即`http://localhost:3000`

## 控制器

`nest`中有一个控制器的概念，用于控制路由。使用`@Controller()`装饰器定义一个基本的控制器。可以在里面传入一个路径作为参数。

```ts
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: string) {
    return `访问了/user?${query.id}`;
  }

  @Get(':id') // 动态路由
  findParamId(@Param('id') id: string) {
    return `访问了/user/${id}`;
  }
}
```

访问`/user?id=1`，则会触发第一个get方法，返回`访问了/user?1`。
访问`/user/2`，则会触发第二个get方法，返回`访问了/user/2`。

**`nest`提供了大量的装饰器提供开发者使用，这里列举常用的几个：**

1. `@Body`：用于获取`Body`参数（`post`请求参数）
2. `@Query`：用于获取`Query`参数（以问号的形式拼接在访问地址上的参数）
3. `@Param`：用于获取`params`参数（动态的路由的参数）。

以上装饰器都可接收一个参数，相当于从获取的参数对象（`Body`、`Query`、`params`）中解构某个参数

## 模块

## 服务
