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
			theme: {
				// Obsidian theme configuration
				colors: {
					primary: {
						50: '#f0f9ff',
						100: '#e0f2fe',
						200: '#bae6fd',
						300: '#7dd3fc',
						400: '#38bdf8',
						500: '#0ea5e9',
						600: '#0284c7',
						700: '#0369a1',
						800: '#075985',
						900: '#0c4a6e',
						950: '#082f49',
					},
					accent: {
						50: '#fdf4ff',
						100: '#fae8ff',
						200: '#f5d0fe',
						300: '#f0abfc',
						400: '#e879f9',
						500: '#d946ef',
						600: '#c026d3',
						700: '#a21caf',
						800: '#86198f',
						900: '#701a75',
						950: '#4a044e',
					},
					neutral: {
						50: '#f8fafc',
						100: '#f1f5f9',
						200: '#e2e8f0',
						300: '#cbd5e1',
						400: '#94a3b8',
						500: '#64748b',
						600: '#475569',
						700: '#334155',
						800: '#1e293b',
						900: '#0f172a',
						950: '#020617',
					},
				},
				fonts: {
					heading: {
						fontFamily: 'var(--font-heading)',
						fontWeight: '700',
					},
					body: {
						fontFamily: 'var(--font-body)',
						fontWeight: '400',
					},
				},
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
