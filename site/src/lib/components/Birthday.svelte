<script lang="ts">
</script>

<div class="celebration-wrapper">
	<div class="birthday-text-wrapper">
		<p>Happy</p>
		<p class="birthday">Birthday<img alt="rys" src="/images/rys.webp" loading="lazy" />!</p>
	</div>
	<p class="birthday-sub">Happy birthday, IRyS!</p>
</div>

<style>
	.celebration-wrapper {
		margin: 0;
		margin-bottom: 2.5em;
	}

	.birthday-text-wrapper {
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
	}

	p {
		font-family: 'Riffic', sans-serif;
	}

	.birthday-text-wrapper > p {
		text-align: center;
		color: transparent;
		font-size: 3.5rem;
		margin: 0;
		line-height: 4.5rem;
		background-image: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
		-webkit-background-clip: text;
		background-clip: text;
	}

	.birthday {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.birthday-text-wrapper > p > img {
		vertical-align: middle;
		width: 4.5rem;
		height: 100%;
	}

	.birthday-sub {
		text-align: center;
		font-size: large;
		margin: 0;
		margin-top: 0.5rem;
	}

	@media only screen and (min-width: 600px) {
		.birthday-text-wrapper > p {
			font-size: 4.5rem;
			line-height: 5.5rem;
		}

		.birthday-text-wrapper > p > img {
			width: 5.5rem;
		}
	}
</style>
