import naive from "naive-ui";
import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme";
import googleAnalytics from "vitepress-plugin-google-analytics";

import "./style/index.css";

export default {
	...DefaultTheme,
	Layout,
	enhanceApp({ app }) {
		app.use(naive);

    //https://analytics.google.com
		googleAnalytics({
			id: "G-8CCY5JBCD0"
		});
	}
};
