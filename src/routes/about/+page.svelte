<svelte:head>
	<title>About Me</title>
	<meta name="Astro Resonance" content="About me!" />
</svelte:head>

<div class="text-column">
	<h1>
		<img src='$lib/images/aboutme.png' alt="About me Photo">
	</h1>

	<h2>
		<strong>A few Things About Me!</strong>
	</h2>

	<section>
	<p class = "p1">
		I have a strong passion for coding applications that benefit everyone. I'm very interested in aerospace,
		as well as machine learning. An exciting project I hope to be able to start soon is a vertical farm! I am
		currently a senior at The University of Texas at Dallas. I help fellow students build Level 1 High Powered
		Rockets, and am currently building a Level 2 High Powered Rocket.
	</p>

	<p class = "p2">
		I am very curious, and have a passion for new endeavors! The idea of the unknown is motivating and inspiring.
		I am also very interested in Quantum Computing and mathematical applications to software! I hope to be able to
		contribute to codebases that benefit the world. I also like to hike and rock climb!
	</p>
	</section>

</div>

<style>



	h1{
		align-content: center;
	}
	img{
		align-content: center;
		object-fit: contain;
		height: 40%;
		width: 40%;
		border-radius: 25px;
	}

	h2{
		align-self: center;
		padding-top: 12%;
		font-size: 250%;
	}

	section{
		border-radius: 4em;
		box-shadow: inset 0 0 0 100vmax rgba(0,0,0,.4);
		font-size: 110%;
	}

	div{
		padding-bottom: 33%;
	}


	@media (max-width: 768px) {
		h1{
			align-content: center;
		}
		img{
			align-content: center;
			object-fit: contain;
			height: 40%;
			width: 40%;
			border-radius: 25px;
		}

		h2{
			align-self: center;
			padding-top: 12%;
			font-size: 250%;
		}

		section{
			border-radius: 4em;
			box-shadow: inset 0 0 0 100vmax rgba(0,0,0,.4);
			font-size: 110%;
		}

		div{
			padding-bottom: 0;
		}
	}

	@media (max-width: 480px) {
		h1{
			align-content: center;
			padding-top: 20%;
		}
		img{

			align-content: center;
			object-fit: contain;
			height: 40%;
			width: 40%;
			border-radius: 25px;
		}

		h2{
			padding-top: 20%;
			font-size: 175%;

		}

		section{
			border-radius: 4em;
			box-shadow: inset 0 0 0 100vmax rgba(0,0,0,.4);
			font-size: small;
		}

		div{
			padding-bottom: 0;
		}
	}

	@media (max-width: 380px) {
		h1{
			align-content: center;
			padding-top: 20%;
		}
		img{

			align-content: center;
			object-fit: contain;
			height: 40%;
			width: 40%;
			border-radius: 25px;
		}

		h2{
			padding-top: 20%;
			font-size: 175%;

		}

		section{
			border-radius: 4em;
			box-shadow: inset 0 0 0 100vmax rgba(0,0,0,.4);
			font-size: small;
		}

		div{
			padding-bottom: 0;
		}
	}



</style>
