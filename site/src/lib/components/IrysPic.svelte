<script lang="ts">
	import { clickOpacity } from '$lib/store';

	function loadImage() {
		let rand = Math.floor(Math.random() * (10 + 1));

		if (rand >= 5) {
			return {
				img: '/images/wink.webp',
				alt: 'A winking IRyS.'
			};
		} else {
			return {
				img: '/images/smug.webp',
				alt: 'A smug IRyS.'
			};
		}
	}

	let loadedImage = loadImage();
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
