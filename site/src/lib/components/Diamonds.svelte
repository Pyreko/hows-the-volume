<div class="diamonds-wrapper">
	<div class="diamonds" />
</div>

<style>
	.diamonds-wrapper {
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: -50;
		overflow: hidden;
	}

	.diamonds {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.025);
		-webkit-mask-image: url('/images/diamond.svg');
		mask-image: url('/images/diamond.svg');
		-webkit-mask-size: 600px 400px;
		mask-size: 600px 400px;
		-webkit-mask-position: center;
		mask-position: center;
	}

	@media only screen and (min-width: 480px) {
		.diamonds {
			-webkit-mask-size: 900px 600px;
			mask-size: 900px 600px;
		}
	}

	@media only screen and (min-width: 768px) {
		.diamonds {
			-webkit-mask-size: 1200px 800px;
			mask-size: 1200px 800px;
		}
	}

	@media only screen and (min-width: 1024px) {
		.diamonds {
			-webkit-mask-size: 1500px 1000px;
			mask-size: 1500px 1000px;
		}
	}
</style>
