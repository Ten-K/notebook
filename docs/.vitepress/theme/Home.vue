<script setup>
import { useDark } from "@pureadmin/utils";
import { NConfigProvider, NButton, darkTheme, NSpace, NImage } from "naive-ui";
const { isDark } = useDark();
</script>
<template>
	<n-config-provider :theme="isDark ? darkTheme : undefined">
		<n-space justify="center">
			<n-image width="300" src="https://ooo.0x0.ooo/2023/10/20/O7mzqj.jpg" />
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
