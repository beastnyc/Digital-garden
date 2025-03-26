// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [
		tailwind(),
		starlight({
			title: "Digital Garden",
			description: "A living collection of ideas, projects, and learnings",
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
			},
			social: {
				github: 'https://github.com/beastnyc',
				instagram: 'https://instagram.com/your-username',
				tiktok: 'https://tiktok.com/@your-username',
				threads: 'https://threads.net/@your-username',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Welcome', link: '/start-here' },
					],
				},
				{
					label: 'Notes',
					autogenerate: { directory: 'notes' },
					collapsed: false,
				},
				{
					label: 'Topics',
					collapsed: false,
					items: [
						{ label: 'Topics Overview', link: '/topics/index.html' },
						{ label: 'Programming', link: '/topics/programming' },
						{ label: 'Design', link: '/topics/design' },
						{ label: 'Writing', link: '/topics/writing' },
						{
							label: 'Programming Examples',
							items: [
								{ label: 'Hello World', link: '/topics/programming/hello-world' }
							],
							collapsed: true
						},
						{
							label: 'Design Examples',
							items: [
								{ label: 'Hello World', link: '/topics/design/hello-world' }
							],
							collapsed: true
						},
						{
							label: 'Writing Examples',
							items: [
								{ label: 'Hello World', link: '/topics/writing/hello-world' }
							],
							collapsed: true
						}
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/garden.css'
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://your-site.com/og-image.jpg',
					},
				},
				{
					tag: 'script',
					content: `
						// Direct navigation script - bypasses regular link handling
						document.addEventListener('DOMContentLoaded', () => {
							// Get all sidebar links
							const topicsLinks = {
								'/topics/index.html': '/topics/index.html',
								'/topics/programming': '/topics/programming',
								'/topics/design': '/topics/design',
								'/topics/writing': '/topics/writing',
								'/topics/programming/hello-world': '/topics/programming/hello-world',
								'/topics/design/hello-world': '/topics/design/hello-world',
								'/topics/writing/hello-world': '/topics/writing/hello-world',
								'/start-here': '/start-here'
							};
							
							// Find all sidebar links
							document.querySelectorAll('.sidebar-nav a').forEach(link => {
								// Check if this is one of our topic links
								const href = link.getAttribute('href');
								
								if (href && Object.keys(topicsLinks).includes(href)) {
									// Replace the default link behavior
									link.addEventListener('click', (e) => {
										e.preventDefault();
										// Navigate directly to the page
										window.location.href = topicsLinks[href];
									});
								}
							});
						});
					`
				}
			],
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
			},
		}),
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
		},
		remarkPlugins: [remarkGfm],
	},
});
