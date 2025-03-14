// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
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
						{ label: 'Welcome', link: '/' },
					],
				},
				{
					label: 'Notes',
					autogenerate: { directory: 'notes' },
					collapsed: false,
				},
				{
					label: 'Topics',
					items: [
						{ label: 'Programming', link: '/topics/programming' },
						{ label: 'Design', link: '/topics/design' },
						{ label: 'Writing', link: '/topics/writing' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/garden.css',
				'./src/styles/obsidian.css'
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://your-site.com/og-image.jpg',
					},
				},
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
		remarkPlugins: ['remark-gfm'],
	},
});
