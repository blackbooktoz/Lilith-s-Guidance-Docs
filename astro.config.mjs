// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pagePlugin from "@pelagornis/page";

// https://astro.build/config
export default defineConfig({
	site: "https://blackbooktoz.github.io",
	base: "/Lilith-s-Guidance-Docs/",
	integrations: [
		starlight({
			title: "Lilith's Guidance",
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'App Setup',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'HTML5 Version', slug: 'versions/html5' },
						// { label: 'iOS Version', slug: 'versions/ios' },
						{ label: 'Updating', slug: 'versions/updating' },
						{ label: 'Creating Backups', slug: 'versions/backups' },
					],
				},
				{
					label: 'Ritual Designer',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Unlocking', slug: 'ritual-designer/unlocking' },
						{ label: 'Getting Started', slug: 'ritual-designer/start' },
						{ label: 'BBCode', slug: 'ritual-designer/bbcode' },
						{ label: 'Media', slug: 'ritual-designer/media' },
					],
				},
				// {
				// 	label: 'Other Tutorials',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Schedule', slug: 'other/schedule' },
				// 	],
				// },

				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			plugins: [pagePlugin()],
		}),
	],
});
