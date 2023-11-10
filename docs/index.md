---
layout: home
title: 一万
# hero:
#   name: VitePress
#   text: Vite & Vue powered static site generator.
#   tagline: Lorem ipsum...
#   image:
#     src: /logo.png
#     alt: VitePress
#   actions:
#     - theme: brand
#       text: Get Started
#       link: /guide/what-is-vitepress
#     - theme: alt
#       text: View on GitHub
#       link: https://github.com/vuejs/vitepress
# features:
#   - icon: 🛠️
#     title: Simple and minimal, always
#     details: Lorem ipsum...
#   - icon:
#       src: /cool-feature-icon.svg
#     title: Another cool feature
#     details: Lorem ipsum...
#   - icon:
#       dark: /dark-feature-icon.svg
#       light: /light-feature-icon.svg
#     title: Another cool feature
#     details: Lorem ipsum...
---

<Home />

<script setup>
/**
 * 这里路径 @theme 可以直接指向 .vitepress/theme 目录
 *
 * 注意：
 * 1.0.0-alpha.6 版本以后的别名改为 @theme
 * 详情参考：https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md
 */
import Home from '@theme/Home.vue'
</script>
