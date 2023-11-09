# Nuxt3中使用高德地图

## 1. 在高德地图官网生成自己的key

1. 访问[高德地图官网](https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare)注册账号
2. 进入 **应用管理** -> **我的应用**, 然后点击 `创建新应用`, 创建应用后 **设置 Key时**, 服务平台选择 **Web端(JS API)**

## 2. 使用

在 `nuxt.config.ts` 中 添加下面的代码, `key` 换成自己的高德地图生成的 `key`, `plugin` 后面接上自己需要使用的插件。

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{
					type: "text/javascript",
					src: "https://webapi.amap.com/maps?v=2.0&key=高德地图的key&plugin=AMap.Scale,AMap.HawkEye"
				}
			]
		}
	}
});
```

在 `pages`目录下新建map.vue, 访问 `http://localhost:3000/map` 就可以看到高德地图了。

```ts
<template>
	<div id="map-content"></div>
</template>

<script setup lang="ts">
/**
 * 高德开放平台官网提供的地图 JSAPI2.0 的 Typescript 声明文件
 * 需要自行安装
 */
import "@amap/amap-jsapi-types";

// 加载地图文件
declare let AMap: any;
onMounted(() => {
	const map = new AMap.Map("map-content", {
		zoom: 10
	});
	const marker = new AMap.Marker({
		title: "当前位置",
		position: [114.1693611, 22.3193039], // 位置
		icon: "//vdata.amap.com/icons/b18/1/2.png"
	});
	const toolbar = new AMap.ToolBar({
		position: {
			top: "150px",
			right: "40px"
		}
	}); // 缩放工具条实例化
	const overView = new AMap.HawkEye({
		visible: true
	});

	const MapType = new AMap.MapType({
		defaultType: 0
	});
	map.addControl(toolbar);
	map.addControl(overView);
	map.addControl(MapType);
	map.add(marker);
});
</script>

<style scoped>
#map-content {
	width: 100%;
	height: 80vh;
}
</style>
```
