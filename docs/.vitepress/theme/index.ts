import naive from "naive-ui";
import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme";

// 不蒜子
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import view from "./components/view.vue";

// google分析
import googleAnalytics from "vitepress-plugin-google-analytics";

// 图片缩放
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { onMounted, watch, nextTick } from "vue";

import "./style/index.css";

export default {
  extends: DefaultTheme,
	Layout,
	enhanceApp({ app, router }) {
		app.use(naive);

    // 注册全局组件
    app.component("View", view);

		// 不蒜子
		if (inBrowser) {
			router.onAfterRouteChanged = () => {
				busuanzi.fetch();
			};
		}

		// https://analytics.google.com
		googleAnalytics({
			id: "G-8CCY5JBCD0"
		});
	},
	setup() {
		const route = useRoute();
		const initZoom = () => {
			// mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
			mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
		};
		onMounted(() => {
			initZoom();
		});
		watch(
			() => route.path,
			() => nextTick(() => initZoom())
		);
	}
};
