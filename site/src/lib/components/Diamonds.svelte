<div class="diamonds-wrapper">
	<div class="diamonds" />
</div>

<style>
	.diamonds-wrapper {
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: -50;
		overflow: hidden;
	}

	.diamonds {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.01);
		-webkit-mask-image: url('/images/diamond.svg');
		mask-image: url('/images/diamond.svg');
	}
</style>
