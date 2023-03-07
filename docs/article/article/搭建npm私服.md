# Linux安装Nexus3搭建Npm私服

> 此文章用于搭建内网npm私有库，内网无法穿透外网的情况

## 1.下载安装

[nexus下载地址](https://help.sonatype.com/repomanager3/product-information/download/download-archives---repository-manager-3)

![下载图片指引](https://i.imgtg.com/2023/03/07/YZhMx.png)

将下载的tar.gz文件上传至服务器，然后解压文件

```shell
tar xf nexus-3.43.0-01-unix.tar.gz
```

解压后会出现两个文件夹`nexus-3.43.0-01`和`sonatype-work`

进入刚刚解压的文件夹 `nexus-3.43.0-01`的`bin`文件夹中执行一下命令启动`nexus`服务

```shell
./nexus start
```

## 2.访问Nexus

<http://xx.xx.xx.xx:8081> 记得开通8081端口的防火墙

默认账户为：**admin**

默认密码则存放在`sonatype-work`文件夹下的 **admin.password** 文件中

第一次登录后会提示重置密码

## 3.创建Npm仓库

点击在左侧菜单**Repositories**，点击`Create repository`按钮，可以看到仓库类型列表，如下：

![image1](https://i.imgtg.com/2023/03/07/YZz0t.png)

选择 **npm(hosted)** 仓库类型， 输入 **Name: npm-hosted** 用于存放自己的私有包。其余两种npm仓库类型自行了解

## 4.发布Npm包到私服

1. 添加权限认证，设置权限，点击 **Realms** 菜单， 将 `npm Bearer Token Realm` 添加到右边

2. 点击 **Roles** 菜单， 创建 `nx-deploy` 角色，给角色赋于一个 `nx-repository-view-*-*-*` 权限
  ![image2](https://i.imgtg.com/2023/03/07/YZkBi.webp)

3. 点击 **Users** 菜单，创建 `deployer` 用户,密码也为 `deployer`,同时设定角色为 `nx-deploy`
  ![image3](https://i.imgtg.com/2023/03/07/YZWfL.webp)

4. 客户端的 `.npmrc` 配置
   `_auth` 是 `username:password` 的base64值，这样设置的好处是publish时就不用login了。

   在你的服务器执行`echo -n 'admin:admin123' | openssl base64`即可生成对应的base64。其中的`admin:admin123`为你的nexus的`登录用户:密码`

   ```
   registry=http://127.0.0.1:8081/repository/npm-group/
   email=deployer@skytech.com
   always-auth=true
   _auth="YWRtaW46YWRtaW4xMjM="
   ```

5. 发布npm包到私服
   在package.json配置

   ```json
   "publishConfig" : {
       "registry" : "http://localhost:8081/repository/npm-hosted/" //nexus的npm私服的url
     }
   ```

   若不想在package.json配置，也可以在命令行指定，如下：

   ```bash
   npm publish --registry=http://localhost:8081/repository/npm-hosted/
   ```

## 5. 批量上传本地依赖

请参考<https://blog.csdn.net/u011716769/article/details/126036757>。只能说shell脚本🐂。

::: info 提示

脚本中的`download-tgz package-json package.json`最好改为`download-tgz package-lock package-lock.json`，否则可能出现依赖丢失的问题。

如果 **[node-tgz-downloader](https://github.com/Meir017/node-tgz-downloader)** 下载离线包失败，
可以换成 **[get-npm-tgz](https://github.com/Ten-K/get-npm-tgz)**

:::

在下载npm离线包（tgz）时，可能会下载失败，需要多试几次。如果还是不行，就用手动导入。

npm离线包下载地址示例：<https://registry.npmmirror.com/axios/-/axios-0.18.1.tgz>

直接在地址栏输入示例地址，包名和版本号替换成自己需要的包

## 6. Nexus离线包的坑

**package-lock.json** 文件:

![image-20221223154218025](https://i.imgtg.com/2023/03/07/YZxKX.png)

如上图所示的情况，可能会在 **npm i** 时报找不到 **@ampproject/remapping** 的依赖。下载地址要改为

> <https://registry.npmmirror.com/@ampproject/remapping/-/@ampproject/remapping-2.2.0.tgz>

因为不加上 **@ampproject** ，`nexus`中的npm-host仓库就不会把remapping包归类到 **@ampproject** 文件夹下，下载时路径会出错
