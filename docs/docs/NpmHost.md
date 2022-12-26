# Linux安装nexus搭建npm私服

## 1.下载安装

[nexus下载地址](https://help.sonatype.com/repomanager3/product-information/download/download-archives---repository-manager-3)

![下载图片指引](https://img-blog.csdnimg.cn/4a895fde45114c57a7bc2b85801a457a.png)

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

## 3.创建npm仓库

点击在左侧菜单**Repositories**，可以看到仓库类型列表，如下：

![image1](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20221226183200.png)

点击`Create repository`按钮., 增加 **npm(hosted)** 输入 **Name: npm-hosted** 用于存放自己的私有包

## 4.发布npm包到私服

1. 添加权限认证，设置权限, Realms 菜单, 将 npm Bearer Token Realm 添加到右边

2. 创建nx-deploy角色，给角色赋于一个nx-repository-view-*-*-*权限
  ![image2](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/05102157_62c3a045bfb2a78733.png)

3. 创建deployer 用户,密码也为 deployer,同时设定角色为nx-deploy
  ![image3](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/05102157_62c3a045d8a6247461.png)

4. 客户端的.npmrc配置
   _auth是 username:password 的base64值，这样设置的好处是publish时就不用login了。

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

请参考<https://blog.csdn.net/u011716769/article/details/126036757>。只能说sh脚本🐂。

::: info 提示

脚本中的`download-tgz package-json package.json`最好改为`download-tgz package-lock package-lock.json`，否则可能出现依赖丢失的问题。

如果 **[node-tgz-downloader](https://github.com/Meir017/node-tgz-downloader)** 下载离线包总是失败可以试试 **[get-npm-tgz](https://github.com/Ten-K/get-npm-tgz)**

:::

在下载npm离线包（tgz）时，可能会下载失败，需要多试几次。如果还是不行，就用手动导入。

npm离线包下载地址示例：<https://registry.npmmirror.com/axios/download/axios-0.18.1.tgz>

直接在地址栏输入示例地址，包名和版本号替换成自己需要的包

**`nexus`离线包的坑：**

**package-lock.json** 文件:

![image-20221223154218025](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/image-20221223154218025.png)

如上图所示的情况，可能会在 **npm i** 时报找不到 **@ampproject/remapping** 的依赖。下载地址要改为

> <https://registry.npmmirror.com/@ampproject/remapping/download/@ampproject/remapping-2.2.0.tgz>

因为不加上 **@ampproject** ，`nexus`中的npm-host仓库就不会把remapping包归类到 **@ampproject** 文件夹下，下载时路径会出错
