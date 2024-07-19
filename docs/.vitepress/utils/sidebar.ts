/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.dev/reference/default-theme-sidebar
 */
export const sidebar = {
	"/docs/": [
		{
			text: "前端基础",
			collapsed: true,
			items: [
				// { text: "HTML", link: "/docs/HTML" },
				// { text: "CSS", link: "/docs/CSS" },
				{ text: "JavaScript", link: "/docs/JavaScript" }
			]
		},
		{
			text: "Vue&React",
			collapsed: true,
			items: [
				{ text: "Vue", link: "/docs/Vue" },
				{ text: "React", link: "/docs/React" }
			]
		},
		{
			text: "构建工具",
			collapsed: true,
			items: [
				{ text: "Webpack", link: "/docs/Webpack" },
				{ text: "Vite", link: "/docs/Vite" }
			]
		},
		{
			text: "计算机网络",
			collapsed: true,
			items: [{ text: "HTTP", link: "/docs/HTTP" }]
		},
		{
			text: "后端相关",
			collapsed: true,
			items: [{ text: "Nest", link: "/docs/Nest" }]
		},
		{
			text: "Node",
			collapsed: true,
			items: [
				{ text: "fs模块", link: "/docs/Node/01.fs模块" },
				{ text: "path模块", link: "/docs/Node/02.path模块" },
				{ text: "http模块", link: "/docs/Node/03.http模块" }
			]
		},
		{
			text: "其他",
			collapsed: true,
			items: [{ text: "Shell脚本", link: "/docs/Shell" }]
		},
		{
			text: "面试准备",
			collapsed: true,
			items: [{ text: "高频手写题", link: "/docs/面试准备/高频手写题" }]
		}
	],
	"/article/": [
		{
			text: "年度归档",
			collapsed: true,
			items: [{ text: "2024", link: "/article/archives/2024" }]
		},
		{
			text: "我的文章",
			collapsed: true,
			items: [
				{ text: "nuxt3中使用高德地图", link: "/article/article/nuxt3中使用高德地图" },
				{ text: "搭建npm私服", link: "/article/article/搭建npm私服" }
			]
		}
	]
};
