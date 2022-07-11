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
	}
</style>
