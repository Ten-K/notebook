import { defineConfig } from "vitepress";
import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";
import { mdPlugin } from "./config/plugins";

/**
 * 更多配置项参考：https://vitepress.dev/reference/site-config
 */

const config = defineConfig({
	title: "一万随手记",
	lastUpdated: true,

	themeConfig: {
		lastUpdatedText: "最后更新时间",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Ten-K/notebook"
			}
		],
		nav,
		sidebar
	},
	markdown: {
		config: (md) => mdPlugin(md)
	}
});

export default config;
