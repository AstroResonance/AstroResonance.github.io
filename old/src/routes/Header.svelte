<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner"></div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/old/static">Home</a>
			</li>

			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner"></div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		horiz-align: center;
		height: 12rem;
		box-sizing: border-box;
	}

	.corner {
		height: 100%;
		width: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		--background: white;
		height: 70%;
		padding: 0;
	}

	svg {
		height: 70%;
		width: auto;
		display: flex;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: 500%;
		height: 70%;
		width: 66%;
	}

	li {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 2rem;
	}

	li[aria-current='page']::before {
		--size: 1.5rem;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear, transform 0.2s linear;
	}

	a:hover {
		color: black;
		transform: scale(1.1);
	}

	@media (max-width: 1366px) {
		header {
			flex-direction: column;
			height: auto;
		}

		nav{
			padding: 0;
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			background: var(--background);
			height: 3rem;
			width: 13rem;
			border-color: transparent;
		}

		li[aria-current='page']::before {
			--size: 0.9rem;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			top: 0;
			background: var(--background);
			left: calc(50% - var(--size));
			border: var(--size) solid transparent;
			border-top: var(--size) solid var(--color-theme-1);
		}

		svg {
			height: 3em;
			width: 2rem;
			display: flex;
		}

		li {
			padding: 1rem 0;
		}
	}

	@media (max-width: 480px) {
		header {
			flex-direction: column;
			height: auto;
		}

		nav{
			padding: 0;
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			display: flex;
			background: var(--background);
			background-size: 500%;
			height: 3rem;
			width: 40%;
		}

		li[aria-current='page']::before {
			--size: 0.8rem;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			top: 0;
			left: calc(50% - var(--size));
			border: var(--size) solid transparent;
			border-top: var(--size) solid var(--color-theme-1);
		}

		svg {
			height: 3rem;
		}

		li {
			padding: 1rem 0;
		}
	}
</style>
