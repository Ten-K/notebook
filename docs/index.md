---
layout: home
hero:
  name: "一万随手记"
  text: 记录学习过程中的知识点
  tagline: 总结包含了vue3, http, shell等多种知识点
  image:
    src: ./images/logo.webp
    alt: "一万随手记"
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/JavaScript
    - theme: alt
      text: 文档仓库
      link: https://github.com/Ten-K/notebook

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: vue3 知识点
    details: 清楚详细的记录了 vue3 的各种新 api 以及与 vue2 的差异
  - icon: 🕸️
    title: http 知识点
    details: 从特点到各版本间的区别都一 一记录
  - icon: 🚧
    title: 问题记录
    details: 记录开发过程中遇到的问题以及解决过程
---

<Home />

<script setup>
/**
 * 这里路径 @theme 可以直接指向 .vitepress/theme 目录
 */
// import Home from '@theme/Home.vue'
</script>
