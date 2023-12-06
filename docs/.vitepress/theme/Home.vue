<script setup>
import { ref } from "vue";
import { darkTheme } from "naive-ui";
import { useDark } from "@pureadmin/utils";

const IMG_SRC = "https://ooo.0x0.ooo/2023/10/20/O7mzqj.jpg";
const FALLBACK_SRC =
	"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg";

const { isDark } = useDark();
const loading = ref(true);

function loadImgHandle() {
	loading.value = false;
}
</script>
<template>
	<n-config-provider :theme="isDark ? darkTheme : undefined">
		<n-space justify="center" class="h-xs">
			<n-skeleton
				v-if="loading"
				height="300px"
				width="300px"
			/>
			<n-image
				v-show="!loading"
				:src="IMG_SRC"
				:fallback-src="FALLBACK_SRC"
				:on-load="loadImgHandle"
				width="300"
				alt="首页图片"
			/>
		</n-space>
		<n-space justify="center">
			<n-button tag="a" href="/docs/HTML.html">😊 快速开始</n-button>
			<n-button
				tag="a"
				href="https://github.com/Ten-K/notebook"
				target="_blank"
			>
				Github
			</n-button>
		</n-space>
	</n-config-provider>
</template>
