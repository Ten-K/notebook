# Nuxt

## 安装

::: warning
  Node.js - v18.0.0 或更高版本
:::

```bash
pnpm dlx nuxi@latest init nuxt-demo
```

## 问题

### 01.安装时报错：Error: Failed to download template from registry: fetch failed

**原因：** 网络无法访问 `raw.githubusercontent.com`
**解决办法：** 打开 `C:\Windows\System32\drivers\etc\hosts` 文件，在最底部添加 `185.199.108.133 raw.githubusercontent.com`
