import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: '/AstroResonance.github.io'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path.startsWith('/AstroResonance.github.io/')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;