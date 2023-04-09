/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
	"/docs/": [
		{
			text: "前端基础",
			collapsible: true,
			link: "/docs/HTML",
			items: [
				{ text: "HTML", link: "/docs/HTML" },
				{ text: "CSS", link: "/docs/CSS" },
				{ text: "JavaScript", link: "/docs/JavaScript" }
			]
		},
		{
			text: "Vue&React",
			collapsible: true,
			link: "/docs/Vue",
			items: [
				{ text: "Vue", link: "/docs/Vue" },
				{ text: "React", link: "/docs/React" }
			]
		},
		{
			text: "构建工具",
			collapsible: true,
			link: "/docs/Webpack",
			items: [
				{ text: "Webpack", link: "/docs/Webpack" },
				{ text: "Vite", link: "/docs/Vite" }
			]
		},
		{
			text: "计算机网络",
			collapsible: true,
			link: "/docs/HTTP",
			items: [{ text: "HTTP", link: "/docs/HTTP" }]
		},
		{
			text: "后端相关",
			collapsible: true,
			link: "/docs/Nest",
			items: [{ text: "Nest", link: "/docs/Nest" }]
		},
		{
			text: "Node",
			collapsible: true,
			link: "/docs/Node",
			items: [
				{ text: "fs模块", link: "/docs/Node/01.fs模块" },
				{ text: "path模块", link: "/docs/Node/02.path模块" },
				{ text: "http模块", link: "/docs/Node/03.http模块" }
			]
		},
		{
			text: "其他",
			collapsible: true,
			link: "/docs/Shell",
			items: [{ text: "Shell脚本", link: "/docs/Shell" }]
		},
		{
			text: "面试准备",
			collapsible: true,
			link: "/docs/面试准备/高频手写题",
			items: [{ text: "高频手写题", link: "/docs/面试准备/高频手写题" }]
		}
	],
	"/article/": [
		{
			text: "年度归档",
			collapsible: true,
			items: [{ text: "2023", link: "/article/archives/2023" }]
		},
		{
			text: "我的文章",
			collapsible: true,
			link: "/article/article/搭建npm私服",
			items: [{ text: "搭建npm私服", link: "/article/article/搭建npm私服" }]
		}
	]
};
