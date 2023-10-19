# HTTP

## 一. 特点

1. 简单快速。只需要发送请求方法和路径。
2. 灵活。允许传输任意类型的的数据对象（由Content-Type加以标记）。
3. 无连接。每次连接只处理一个请求，处理完成后断开连接。
4. 无状态。对事务处理没有记忆能力。

## 二. 报文结构

首行结构.

- 请求行：请求方法 请求地址 协议版本
- 响应行：响应方法 状态码 状态码描述

http报文头分为四类：通用报文头、请求报文头、响应报文头、和实体报文头.

  ![http1.png](https://i.imgtg.com/2023/02/28/ViaNP.png)
  ![http2.png](https://i.imgtg.com/2023/02/28/Viqul.png)
  ![http3.png](https://i.imgtg.com/2023/02/28/ViBFg.png)
  ![http4.png](https://i.imgtg.com/2023/02/28/ViTRB.png)

## 三. 请求方法

幂等：不管进行多少次重复的操作，都是实现相同的情况。

1. GET：获取资源。
2. POST（不幂等：创建用，例如添加头像）：提交数据。
3. PUT（幂等：更新用，例如更新头像）：修改数据。
4. HEAD：用于获取报头。
5. DELETE：删除资源。
6. OPTIONS：查询请求url支持的请求方法。

## 四. 状态码

![http5.png](https://i.imgtg.com/2023/02/28/VixdS.png)
![http6.png](https://i.imgtg.com/2023/02/28/ViFaN.png)
![http7.png](https://i.imgtg.com/2023/02/28/VihNC.png)
![http8.png](https://i.imgtg.com/2023/02/28/Vikya.png)

## 五. 状态管理：Cookie与Session

![http9.png](https://s2.loli.net/2023/02/28/IN89YAmP2Lz4H5O.png)
![http10.png](https://i.imgtg.com/2023/02/28/Vi7FX.png)
![http11.png](https://i.imgtg.com/2023/02/28/ViAUj.png)

## 六. 缓存

1. 强缓存

- Cache-Control 一段时间
- Expires 指定具体时间

![http12.png](https://i.imgtg.com/2023/02/28/ViC2t.png)
![http13.png](https://i.imgtg.com/2023/02/28/Vi3tX.png)
2. 协商缓存

- Last-Modified只精确到秒，如果在1秒内修改文件无法感知

![http14.png](https://i.imgtg.com/2023/03/01/VK2IU.png)
![http15.png](https://i.imgtg.com/2023/03/01/VK8FY.png)
3. 缓存改进方案：

![http16.png](https://i.imgtg.com/2023/03/01/VKXRv.png)
![http17.png](https://i.imgtg.com/2023/03/01/VKujq.png)

## 七. 断点续传与多线程下载

![http18.png](https://i.imgtg.com/2023/03/01/VZae1.png)
![http19.png](https://i.imgtg.com/2023/03/01/VKCyr.png)
![http20.png](https://i.imgtg.com/2023/03/01/VKwsM.png)
![http21.png](https://i.imgtg.com/2023/03/01/VZOaG.png)
![http22.png](https://i.imgtg.com/2023/03/01/VZoEI.png)

## 八. HTTPS

- HTTP： 直接通过明文在浏览器和服务器之间传递信息。
- HTTPS：采用 对称加密 和 非对称加密 结合的方式来保护浏览器和服务端之间的通信安全。

> HTTPS其实是有两部分组成：HTTP + SSL / TLS，也就是在HTTP上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。

![http23.png](https://i.imgtg.com/2023/03/01/VZqID.png)

## 九. SPDY改进

1. 多路复用，请求优化
2. 支持服务器推送
3. 压缩http请求头
4. 强制使用ssl传输协议

## 十. HTTP2.0

1. 二进制分帧
2. 多路复用
3. 首部压缩
http1.x的header由于cookie和user agent很容易膨胀，而且每次都要重复发送。http2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。高效的压缩算法可以很大的压缩header，减少发送包的数量从而降低延迟。
4. 服务器推送

缺陷：

1. 队头阻塞(多路复用：丢包情况下，整个tcp都要重传)
2. 建立连接的握手延迟大

## 十一. HTTP3.0

基于UDP的QUIC

1. 0 RTT（往返时延）建立连接（目前TCP与SSL/TLS(1.0,1.1,1.2)每次建连需要TCP三次握手+安全握手，需要4~5个RRT）。
2. 避免前序包阻塞（前向纠错）。多个数据在TCP连接上传输时，若一个数据包出现问题，TCP需要等待该包重传后，才能继续传输其它数据包。但在QUIC中，因为其基于UDP协议，UDP数据包在出问题需要重传时，并不会对其他数据包传输产生影响。
3. 快速重启会话。普通基于tcp的连接，是基于两端的ip和端口和协议来建立的。在网络切换场景，例如手机端切换了无线网，使用4G网络，会改变本身的ip，这就导致tcp连接必须重新创建。而QUIC协议使用特有的UUID来标记每一次连接，在网络环境发生变化的时候，只要UUID不变，就能不需要握手，继续传输数据。

## 十二. Web安全

### 1. XSS（跨站脚本攻击）

> [美团前端安全](https://juejin.cn/post/6844903685122703367#heading-8)

Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

- 持久型（存储型XSS）
攻击步骤：

1. 攻击者将恶意代码提交到目标网站的数据库中。
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

这种攻击常见于带有用户保存数据的网站功能，如**论坛发帖、商品评论、用户私信**等。

- 非持久型（反射型XSS）
攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。
反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如**网站搜索、跳转**等。
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。

- DOM 型
攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL。
3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

防御：

- 转义字符

> 用户的输入永远不可信任的，最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义

```javascript
function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
```

- HTTPOnly Cookie

> 禁止通过脚本获取cookie

- 验证码

> 防止脚本冒充用户提交危险操作。

- CSP（白名单）

> 通常可以通过两种方式来开启 CSP：
>
> - 设置 HTTP Header 中的 Content-Security-Policy
>
只允许加载本站资源：Content-Security-Policy: default-src 'self'
>
> - 设置 meta 标签的方式

![http24.png](https://i.imgtg.com/2023/03/01/VZBhF.png)

### 2. CSRF（跨站请求伪造）

下图简单阐述CSRF攻击原理:
![csrf原理图](https://img-blog.csdnimg.cn/img_convert/0350aa6a64b56f5d992c29517c8cc32a.png)

防御：

- SameSite

> 可以对 Cookie 设置 SameSite 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

- Referer Check

> **通过检查http包头referer的值是不是这个页面，来判断是不是CSRF攻击**

- 请求时附带验证信息，比如验证码或者 Token

> Token被用户端放在Cookie中（不设置HttpOnly），同源页面每次发请求都在请求头或者参数中加入Cookie中读取的Token来完成验证。[CSRF](https://so.csdn.net/so/search?q=CSRF&spm=1001.2101.3001.7020)_只能_通过_浏览器自己带上_Cookie，_不能操作Cookie来获取到Token并加到http请求的参数中_。
> 所以CSRF本质原因是“重要操作的所有参数都是可以被攻击者猜测到的”，**Token加密后通过Cookie储存**，只有**同源页面**可以读取，把Token作为重要操作的参数，CSRF无法获取Token放在参数中，也无法仿造出正确的Token，就被防止掉了

## 十三. 问题汇总

### 1. http各版本的区别

  ![http25.png](https://i.imgtg.com/2023/03/01/VZxsg.png)

### 2. UDP和TCP的区别

> 字节就是散乱的数据  报文就是添加了标记，封装后的数据

![http26.png](https://i.imgtg.com/2023/03/01/VZbWb.png)

### 3. GET和POST的区别

![http27.png](https://i.imgtg.com/2023/03/01/VZkyl.png)

### 4. 命中缓存除了返回304还会返回什么

HTTP缓存一般有两种：强缓存和协议缓存。前者的资源是缓存到本地直接从本地获取的，获取成功后返回 200，状态为 from memory cache 或 from disk cache；后者是向服务器发送请求，通过响应头来判断是否“命中”缓存资源，如缓存资源与服务器一致，则使用缓存资源，返回304。

### 5.从输入url到页面显示的过程

[好文章](https://juejin.cn/post/6844903784229896199)

### 6.cookie的字段有哪些

![http28.png](https://i.imgtg.com/2023/03/01/VZhes.png)

## 十四.扩展

![http29.png](https://i.imgtg.com/2023/03/01/VZFoB.png)

> 推荐学习文章
>
> 1. [HTTP 2.0为什么这么设计](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247490777&idx=2&sn=3a4279eb23e8e99c435fece44dfe6683&chksm=fa2bfc30cd5c75267bef4aeba455a6262aab326708b9f292587b64e217ee44ba4b3954cabeb7&mpshare=1&scene=24&srcid=06037z73p12vGWm0UmfJsY85&sharer_sharetime=1654185683624&sharer_shareid=c84b258825dd0bcb6bccaa18948bafbb#rd)
> 2. [HTTP常见面试题](https://www.cnblogs.com/Vincent-yuan/p/15685967.html)
> 3. [详解正向代理与反向代理](https://blog.csdn.net/Dax1_/article/details/124652162)
