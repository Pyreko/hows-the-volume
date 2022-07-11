<script lang="ts">
	import Confetti from './Confetti.svelte';

	export let numYears: number;
	export let showConfetti = false;
</script>

<div class="celebration-wrapper">
	<Confetti {showConfetti} />
	<div class="anni-text-wrapper">
		<p>Happy</p>
		<p class="anniversary">Anniversa<img alt="rys" src="/images/rys.webp" loading="lazy" />!</p>
	</div>
	<p class="anni-sub">Congrats on the {numYears} year anniversary, IRyS!</p>
</div>

<style>
	.celebration-wrapper {
		margin: 0;
		margin-bottom: 2.5em;
		overflow: hidden;
	}

	.anni-text-wrapper {
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

	.anni-text-wrapper > p {
		text-align: center;
		color: transparent;
		font-size: 3.5rem;
		margin: 0;
		line-height: 4.5rem;
		background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
		-webkit-background-clip: text;
		background-clip: text;
	}

	.anniversary {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.anni-text-wrapper > p > img {
		vertical-align: middle;
		width: 4.5rem;
		height: 100%;
	}

	.anni-sub {
		text-align: center;
		font-size: large;
		margin: 0;
		margin-top: 0.5rem;
	}

	@media only screen and (min-width: 600px) {
		.anni-text-wrapper > p {
			font-size: 4.5rem;
			line-height: 5.5rem;
		}

		.anni-text-wrapper > p > img {
			width: 5.5rem;
		}
	}
</style>
