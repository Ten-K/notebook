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

  ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607672076422-751d1748-8e90-47bf-a000-ce189c7114e2.png#averageHue=%23ecf2ef&crop=0&crop=0&crop=1&crop=1&height=305&id=fjLHF&margin=%5Bobject%20Object%5D&name=image.png&originHeight=638&originWidth=1298&originalType=binary&ratio=1&rotation=0&showTitle=false&size=513540&status=done&style=shadow&title=&width=620)

  ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607672204794-9cd2f29e-b7ad-450e-a443-f569d7f8f792.png#averageHue=%23eaf0ee&crop=0&crop=0&crop=1&crop=1&height=420&id=w10KD&margin=%5Bobject%20Object%5D&name=image.png&originHeight=839&originWidth=1237&originalType=binary&ratio=1&rotation=0&showTitle=false&size=796388&status=done&style=shadow&title=&width=619)

  ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607672396865-eb54f2b4-3e9e-42bc-8fc1-50eb1cf04cd0.png#averageHue=%23e9efec&crop=0&crop=0&crop=1&crop=1&height=284&id=UafIB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=793&originWidth=1724&originalType=binary&ratio=1&rotation=0&showTitle=false&size=968261&status=done&style=shadow&title=&width=618)

  ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607672550785-4108fbe4-4cde-4129-b089-f811747b0fce.png#averageHue=%23eaf0ed&crop=0&crop=0&crop=1&crop=1&height=314&id=QNte4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=850&originWidth=1696&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1101426&status=done&style=shadow&title=&width=626)

---

## 三. 请求方法

幂等：不管进行多少次重复的操作，都是实现相同的情况。

1. GET：获取资源。
2. POST（不幂等：创建用，例如添加头像）：提交数据。
3. PUT（幂等：更新用，例如更新头像）：修改数据。
4. HEAD：用于获取报头。
5. DELETE：删除资源。
6. OPTIONS：查询请求url支持的请求方法。

---

## 四. 状态码

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675021632-d457f391-8c12-4c7b-972a-77f50c9f7ce7.png#averageHue=%23dae1e0&crop=0&crop=0&crop=1&crop=1&height=341&id=dQy8V&margin=%5Bobject%20Object%5D&name=image.png&originHeight=682&originWidth=2342&originalType=binary&ratio=1&rotation=0&showTitle=false&size=952758&status=done&style=shadow&title=&width=1171)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675122414-c3097202-d453-4936-ad6e-cde458a174ec.png#averageHue=%23d9dfde&crop=0&crop=0&crop=1&crop=1&height=450&id=GXDPm&margin=%5Bobject%20Object%5D&name=image.png&originHeight=900&originWidth=2072&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1284369&status=done&style=shadow&title=&width=1036)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675217645-768817aa-4e36-4eed-85f2-f7f0d7fc2222.png#averageHue=%23dce2e1&crop=0&crop=0&crop=1&crop=1&height=474&id=zbzMe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=948&originWidth=2071&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1329030&status=done&style=shadow&title=&width=1036)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675294179-f069274d-a71e-4df4-84ad-4fdf1d0c7c4a.png#averageHue=%23e2e8e6&crop=0&crop=0&crop=1&crop=1&height=409&id=Xbehu&margin=%5Bobject%20Object%5D&name=image.png&originHeight=817&originWidth=2069&originalType=binary&ratio=1&rotation=0&showTitle=false&size=763246&status=done&style=shadow&title=&width=1034.5)

---

## 五. 状态管理：Cookie与Session

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675905873-44ee54a1-90eb-4786-ad5e-dce6f625ca4a.png#averageHue=%23e5eae6&crop=0&crop=0&crop=1&crop=1&height=443&id=skodT&margin=%5Bobject%20Object%5D&name=image.png&originHeight=886&originWidth=2084&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1090906&status=done&style=shadow&title=&width=1042)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607675953645-dc4d334b-d231-49f7-a5c7-76b8a379987b.png#averageHue=%23ebf0ec&crop=0&crop=0&crop=1&crop=1&height=476&id=FrfFn&margin=%5Bobject%20Object%5D&name=image.png&originHeight=952&originWidth=2118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=944921&status=done&style=shadow&title=&width=1059)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607676038709-9b3f35cb-70d2-4819-8185-0ac756017949.png#averageHue=%23f2f7f3&crop=0&crop=0&crop=1&crop=1&height=473&id=R5kf3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=946&originWidth=1732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=645313&status=done&style=shadow&title=&width=866)

## 六. 缓存

1. 强缓存

- Cache-Control 一段时间
- Expires 指定具体时间

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607676979798-28f6ae04-f376-415d-a2c0-47db5f2be7d1.png#averageHue=%23eef3ef&crop=0&crop=0&crop=1&crop=1&height=615&id=GhGil&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1230&originWidth=2026&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1273539&status=done&style=shadow&title=&width=1013)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607677033782-03790305-9bf0-467e-b1d4-bf481de4ad55.png#averageHue=%23eaefeb&crop=0&crop=0&crop=1&crop=1&height=221&id=vweAn&margin=%5Bobject%20Object%5D&name=image.png&originHeight=441&originWidth=2192&originalType=binary&ratio=1&rotation=0&showTitle=false&size=490376&status=done&style=shadow&title=&width=1096)

2. 协商缓存

- Last-Modified只精确到秒，如果在1秒内修改文件无法感知

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607677083588-1a952526-b0d8-4ecf-8f2d-364ba542645a.png#averageHue=%23ebf0ec&crop=0&crop=0&crop=1&crop=1&height=401&id=wYzIM&margin=%5Bobject%20Object%5D&name=image.png&originHeight=802&originWidth=1949&originalType=binary&ratio=1&rotation=0&showTitle=false&size=752441&status=done&style=shadow&title=&width=974.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607677110940-a364d535-118c-44aa-a189-33761ef9a71d.png#averageHue=%23ecf1ed&crop=0&crop=0&crop=1&crop=1&height=388&id=gM3jz&margin=%5Bobject%20Object%5D&name=image.png&originHeight=776&originWidth=2162&originalType=binary&ratio=1&rotation=0&showTitle=false&size=799276&status=done&style=shadow&title=&width=1081)

3. 缓存改进方案：

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607677519618-98de69d3-8e93-4344-86a5-9cddcf622f9f.png#averageHue=%23e4e9e6&crop=0&crop=0&crop=1&crop=1&height=484&id=bjldz&margin=%5Bobject%20Object%5D&name=image.png&originHeight=967&originWidth=2182&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1331198&status=done&style=shadow&title=&width=1091)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607677727266-f7f88b10-87b3-44e3-8f3a-bf04a599a4b4.png#averageHue=%23dde1de&crop=0&crop=0&crop=1&crop=1&height=499&id=de4bB&margin=%5Bobject%20Object%5D&name=image.png&originHeight=997&originWidth=2403&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1303796&status=done&style=shadow&title=&width=1201.5)

## 七. 断点续传与多线程下载

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607678132798-1d641de4-4330-4a14-8503-a5708f45cc16.png#averageHue=%23eff4f0&crop=0&crop=0&crop=1&crop=1&height=463&id=eT6qt&margin=%5Bobject%20Object%5D&name=image.png&originHeight=925&originWidth=2043&originalType=binary&ratio=1&rotation=0&showTitle=false&size=921117&status=done&style=none&title=&width=1021.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607678144531-0234d2bd-4955-4626-aa93-9faa8e6a5269.png#averageHue=%23eef3ef&crop=0&crop=0&crop=1&crop=1&height=313&id=HpOds&margin=%5Bobject%20Object%5D&name=image.png&originHeight=626&originWidth=2003&originalType=binary&ratio=1&rotation=0&showTitle=false&size=484742&status=done&style=none&title=&width=1001.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607678172245-0a2536a6-67a1-44d4-807c-ab498c24aace.png#averageHue=%23eff3ef&crop=0&crop=0&crop=1&crop=1&height=493&id=jyC5t&margin=%5Bobject%20Object%5D&name=image.png&originHeight=986&originWidth=1190&originalType=binary&ratio=1&rotation=0&showTitle=false&size=515187&status=done&style=none&title=&width=595)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607678198727-81b5aa20-4c1f-46bb-9a78-e7acc0058b0b.png#averageHue=%23ebefec&crop=0&crop=0&crop=1&crop=1&height=344&id=BTkQi&margin=%5Bobject%20Object%5D&name=image.png&originHeight=688&originWidth=1732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=565137&status=done&style=none&title=&width=866)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607678238199-706729d7-2e19-4c41-9dfc-f70c078c2ad2.png#averageHue=%23e5eae6&crop=0&crop=0&crop=1&crop=1&height=585&id=BzXxM&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1169&originWidth=2001&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1482883&status=done&style=none&title=&width=1000.5)

## 八. HTTPS

- HTTP： 直接通过明文在浏览器和服务器之间传递信息。
- HTTPS：采用 对称加密 和 非对称加密 结合的方式来保护浏览器和服务端之间的通信安全。

> HTTPS其实是有两部分组成：HTTP + SSL / TLS，也就是在HTTP上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607686901347-4026fd14-f954-4831-868c-32fa6882bba9.png#averageHue=%23c5c9ba&crop=0&crop=0&crop=1&crop=1&height=663&id=mSe7w&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1325&originWidth=1478&originalType=binary&ratio=1&rotation=0&showTitle=false&size=293623&status=done&style=shadow&title=&width=739)

## 九. SPDY改进

1. 多路复用，请求优化
2. 支持服务器推送
3. 压缩http请求头
4. 强制使用ssl传输协议

## 十. HTTP2.0

1. 二进制分帧
2. 首部压缩
3. 服务器推送
4. 多路复用

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

[三元博客](https://sanyuan0704.top/blogs/browser/browser-security/001.html#%E4%BB%80%E4%B9%88%E6%98%AF-xss-%E6%94%BB%E5%87%BB)
[美团前端安全](https://juejin.cn/post/6844903685122703367#heading-8)

- 非持久型（反射型XSS）
- 持久型（存储型XSS）
- DOM 型

防御：

- CSP（白名单）

> 通常可以通过两种方式来开启 CSP：
>
> - 设置 HTTP Header 中的 Content-Security-Policy
>
Content-Security-Policy: default-src 'self'
>
> - 设置 meta 标签的方式

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

- CSP（白名单）

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1535451/1656407415338-17656f10-4b2d-49b4-bd6f-4b65a3e2f8f5.png#averageHue=%23f5f3f1&clientId=ucecbbf25-0ccd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=214&id=uce6f381a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=321&originWidth=773&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75983&status=done&style=shadow&taskId=uc68f66b8-d2c6-4a44-a078-75af5cac64e&title=&width=515.3333333333334)

### 2. CSRF（跨站请求伪造）

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

  ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607687045717-e2476298-baaa-4a99-aede-f69da1ce7bb3.png#averageHue=%23c6c9bb&crop=0&crop=0&crop=1&crop=1&height=396&id=iqasA&margin=%5Bobject%20Object%5D&name=image.png&originHeight=791&originWidth=1409&originalType=binary&ratio=1&rotation=0&showTitle=false&size=156214&status=done&style=shadow&title=&width=704.5)

### 2. UDP和TCP的区别

> 字节就是散乱的数据  报文就是添加了标记，封装后的数据

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607687770503-66cd16ba-660b-45a9-87b2-7d6960151de0.png#averageHue=%23fbfaed&crop=0&crop=0&crop=1&crop=1&height=260&id=Gv2ch&margin=%5Bobject%20Object%5D&name=image.png&originHeight=520&originWidth=1388&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81077&status=done&style=shadow&title=&width=694)

### 3. GET和POST的区别

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1535451/1607688126481-247170af-d51c-4a44-9497-6c16bcc4586f.png#averageHue=%23f7f6f6&crop=0&crop=0&crop=1&crop=1&height=365&id=pURqt&margin=%5Bobject%20Object%5D&name=image.png&originHeight=729&originWidth=1437&originalType=binary&ratio=1&rotation=0&showTitle=false&size=105372&status=done&style=shadow&title=&width=718.5)

### 4. 命中缓存除了返回304还会返回什么

HTTP缓存一般有两种：强缓存和协议缓存。前者的资源是缓存到本地直接从本地获取的，获取成功后返回 200，状态为 from memory cache 或 from disk cache；后者是向服务器发送请求，通过响应头来判断是否“命中”缓存资源，如缓存资源与服务器一致，则使用缓存资源，返回304。

### 5.从输入url到页面显示的过程

[好文章](https://juejin.cn/post/6844903784229896199)

### 6.cookie的字段有哪些

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1535451/1656402912129-3e82fc23-381f-4608-ab97-2d6fa9b185f8.png#averageHue=%23f7f5f4&clientId=ucecbbf25-0ccd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=377&id=u546efffd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=565&originWidth=1250&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81006&status=done&style=shadow&taskId=ub64fc66e-857b-4336-8e0f-b95e44c693b&title=&width=833.3333333333334)

## 十四.扩展

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1535451/1654594198980-3dd093a4-e908-4918-977f-0dbe78ffbc08.png#averageHue=%23f3f3f3&clientId=ub012f4ee-9701-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uf26ff79f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=481&originWidth=749&originalType=url&ratio=1&rotation=0&showTitle=false&size=40250&status=done&style=shadow&taskId=uad9a895c-be30-4d96-9eac-8f6a29e0619&title=)
> 推荐学习文章
>
> 1. [HTTP 2.0为什么这么设计](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247490777&idx=2&sn=3a4279eb23e8e99c435fece44dfe6683&chksm=fa2bfc30cd5c75267bef4aeba455a6262aab326708b9f292587b64e217ee44ba4b3954cabeb7&mpshare=1&scene=24&srcid=06037z73p12vGWm0UmfJsY85&sharer_sharetime=1654185683624&sharer_shareid=c84b258825dd0bcb6bccaa18948bafbb#rd)
> 2. [HTTP常见面试题](https://www.cnblogs.com/Vincent-yuan/p/15685967.html)
