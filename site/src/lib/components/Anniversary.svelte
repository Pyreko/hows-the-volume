<script lang="ts">
	import { fade } from 'svelte/transition';

	export let numYears: number;
	export let showConfetti = false;

	function reducedMotion(): boolean {
		return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
	}
</script>

<div class="celebration-wrapper">
	{#if showConfetti && !reducedMotion()}
		<div class="confetti-wrapper" transition:fade={{ duration: 100 }}>
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
			<div class="confetti" />
		</div>
	{/if}
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
			font-size: 4rem;
			line-height: 5rem;
		}

		.anni-text-wrapper > p > img {
			width: 5rem;
		}
	}

	.confetti-wrapper {
		display: none;
		z-index: -100;
	}

	@media (prefers-reduced-motion: no-preference) {
		.confetti-wrapper {
			overflow: hidden;
			width: 100vw;
			height: 100vh;
			left: 0;
			top: 0;
			position: absolute;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			z-index: -100;
		}

		.confetti {
			width: 15px;
			height: 15px;
			background-color: #f2d74e;
			animation: confetti 5s ease-in-out -2s infinite;
			transform-origin: left top;
		}
		.confetti:nth-child(1) {
			background-color: #f2d74e;
			left: 10%;
			animation-delay: 0;
		}
		.confetti:nth-child(2) {
			background-color: #95c3de;
			left: 20%;
			animation-delay: -5s;
		}
		.confetti:nth-child(3) {
			background-color: #ff9a91;
			left: 30%;
			animation-delay: -3s;
		}
		.confetti:nth-child(4) {
			background-color: #f2d74e;
			left: 40%;
			animation-delay: -2.5s;
		}
		.confetti:nth-child(5) {
			background-color: #95c3de;
			left: 50%;
			animation-delay: -4s;
		}
		.confetti:nth-child(6) {
			background-color: #ff9a91;
			left: 60%;
			animation-delay: -6s;
		}
		.confetti:nth-child(7) {
			background-color: #f2d74e;
			left: 70%;
			animation-delay: -1.5s;
		}
		.confetti:nth-child(8) {
			background-color: #95c3de;
			left: 80%;
			animation-delay: -2s;
		}
		.confetti:nth-child(9) {
			background-color: #ff9a91;
			left: 90%;
			animation-delay: -3.5s;
		}
		.confetti:nth-child(10) {
			background-color: #f2d74e;
			left: 100%;
			animation-delay: -2.5s;
		}
		.confetti:nth-child(11) {
			background-color: #ff9a91;
			left: 110%;
			animation-delay: -3s;
		}
		.confetti:nth-child(12) {
			background-color: #95c3de;
			left: 120%;
			animation-delay: -1s;
		}
		.confetti:nth-child(13) {
			background-color: #f2d74e;
			left: 130%;
			animation-delay: -5s;
		}
		.confetti:nth-child(14) {
			background-color: #ff9a91;
			left: 140%;
			animation-delay: -4.5s;
		}
		.confetti:nth-child(15) {
			background-color: #ff1377;
			left: 150%;
			animation-delay: -2.5s;
		}

		@keyframes confetti {
			0% {
				transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
			}
			25% {
				transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
			}
			50% {
				transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
			}
			75% {
				transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
			}
			100% {
				transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
			}
		}
	}
</style>
