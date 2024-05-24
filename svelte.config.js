import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: dev ? '' : '/AstroResonance.github.io'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path.startsWith('/AstroResonance.github.io/')) {
					return;
				}
				throw new Error(message);
			}
		}
	},

	preprocess: preprocess()
};