<script lang="ts">
	import { clickOpacity } from '$lib/store';

	let loadedImage = (() => {
		const choices = [
			{
				img: '/images/wink.webp',
				alt: 'A winking IRyS.'
			},
			{
				img: '/images/smug.webp',
				alt: 'A smug IRyS.'
			}
		];

		let rand = Math.floor(Math.random() * choices.length);
		return choices[rand];
	})();
	let imageSrc = loadedImage.img;
	let imageAlt = loadedImage.alt;
</script>

<div>
	<img src={imageSrc} alt={imageAlt} loading="lazy" style="opacity: {$clickOpacity}%" />
</div>

<style>
	div {
		z-index: -10;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	img {
		vertical-align: middle;
		width: 50%;
		object-fit: contain;
	}
</style>
