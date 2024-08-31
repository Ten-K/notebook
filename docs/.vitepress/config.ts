import { defineConfig } from "vitepress";
import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";
import { mdPlugin } from "./config/plugins";

/**
 * 更多配置项参考：https://vitepress.dev/reference/site-config
 */

const config = defineConfig({
	title: "一万随手记",
	description: "记录前端学习笔记",
	lastUpdated: true,
	themeConfig: {
		nav,
		sidebar,
    outline: [2, 3],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2023-present Ten-K"
		},
		editLink: {
			pattern: "https://github.com/Ten-K/notebook/tree/main/docs/:path",
			text: "在GitHub上编辑此页面"
		},
		search: {
			provider: "local"
		},
		lastUpdated: {
			text: "最后更新时间"
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Ten-K/notebook"
			}
		]
	},
	markdown: {
		config: (md) => mdPlugin(md)
	}
});

export default config;
