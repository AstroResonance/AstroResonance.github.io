<script>
	import AR from '$lib/images/astro-resonance.png';
	import '@fortawesome/fontawesome-free/css/all.css'
</script>

<svelte:head>
	<title>Astro Resonance</title>
	<meta name="description" content="Astro Resonance" />
</svelte:head>

<section>
	<h1>
		<span class="intro">
			<picture>
				<source srcset={AR} type="image/astro-resonance.png" />
				<img src={AR} alt="AR" />
			</picture>
		</span>

	</h1>

	<h2>
		<strong>Coding that resonates</strong>
	</h2>

	<footer>
			<a class = "Github" href = "https://www.github.com/AstroResonance" target="_blank">
				<i class="fa-brands fa-square-github"></i>
			</a>

			<a class = "LinkedIn" href = "https://www.linkedin.com/in/brennan-pease/" target="_blank">
				<i class="fa-brands fa-linkedin "></i>
			</a>

	</footer>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	h1 {
		flex-wrap: nowrap;
		width: 80%;
		height: 150%;
		padding-bottom: 10%;
		scale: 1.4;
	}

	h2{
		font-size: 250%;
		padding: 15%;
	}

	footer{
		width: 50%;
		height: 50%;
		display: flex;
		justify-content: space-around;
	}


	picture{
		height: 100%;
		width: 100%;
	}
	.intro img {
		position: relative;
		width: 100%;
		height: 100%;
		display: block;
	}

	a{

		opacity: 0.9;
	}

	a:hover{
		opacity: 1;
		transform: scale(1.2,1.2);
		cursor: pointer;
	}

	.fa-linkedin, .fa-square-github {
		color: #ffffff;
		font-size: 10rem;
		transition: color 0.3s;
	}

	a:hover .fa-linkedin{
		color: #0072B1;
		opacity: 1;
	}

	a:hover .fa-square-github{
		color: gold;
		opacity: 1;
	}

	@media (max-width: 768px) {
		h1 {
			scale: 1.3;
			padding-top: 8rem;
		}

		picture{
			height: 8rem;
			width: 100%;
		}

		h2 {
			font-size: 2rem;
			padding-top:5rem;
		}

		.fa-linkedin, .fa-square-github {
			font-size: 4rem;
		}
	}

	@media (max-width: 480px) {
		picture{
			height: 10rem;
			width: 100%;
		}

		h1 {
			scale: 1.3;
			padding-bottom: 10rem;
		}

		h2 {
			font-size: 1.5rem;
			padding: 2rem;
		}

		.fa-linkedin, .fa-square-github {
			font-size: 3rem;
		}
	}

</style>

