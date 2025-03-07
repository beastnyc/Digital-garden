// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Bianca's Digital Garden",
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
						{ label: 'Installation', link: '/installation' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', link: '/guides/example' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
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
});
