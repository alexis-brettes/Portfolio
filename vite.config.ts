import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** GitLab Pages serves project sites under /<project>/ — set via CI, empty for local dev. */
const base: '' | `/${string}` = process.env.CI_PAGES_URL
	? (new URL(process.env.CI_PAGES_URL).pathname.replace(/\/$/, '') as `/${string}`)
	: '';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				strict: true
			}),
			paths: { base }
		})
	]
});
