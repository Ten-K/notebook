import naive from "naive-ui";
import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme";

import "./style/index.css";

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.use(naive);
	}
};
