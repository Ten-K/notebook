/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
	'/docs/': [
		{
			text: '前端基础',
			collapsible: true,
			link: '/docs/HTML',
			items: [
				{ text: 'HTML', link: '/docs/HTML' },
				{ text: 'CSS', link: '/docs/CSS' },
				{ text: 'JavaScript', link: '/docs/JavaScript' }
			]
		},
		{
			text: 'Vue&React',
			collapsible: true,
			link: '/docs/Vue',
			items: [
				{ text: 'Vue', link: '/docs/Vue' },
				{ text: 'React', link: '/docs/React' }
			]
		},
		{
			text: '构建工具',
			collapsible: true,
			link: '/docs/Webpack',
			items: [
				{ text: 'Webpack', link: '/docs/Webpack' },
				{ text: 'Vite', link: '/docs/Vite' }
			]
		},
		{
			text: '计算机网络',
			collapsible: true,
			link: '/docs/HTTP',
			items: [{ text: 'HTTP', link: '/docs/HTTP' }]
		},
		{
			text: '服务器相关',
			collapsible: true,
			link: '/docs/Nest',
			items: [{ text: 'Nest', link: '/docs/Nest' }]
		}
	]
}
