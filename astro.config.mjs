// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pagePlugin from "@pelagornis/page";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'html5 Guide', slug: 'guides/html5' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [pagePlugin()],
		}),
	],
});
