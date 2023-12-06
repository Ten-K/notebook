import naive from "naive-ui";
import DefaultTheme from "vitepress/theme";

import "./style/index.scss";
import 'virtual:uno.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(naive);
	}
};
