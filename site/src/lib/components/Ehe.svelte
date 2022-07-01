<script lang="ts">
	import { clickOpacity } from '$lib/store';
</script>

<div>
	<img src="/images/ehe.webp" alt="A smug IRyS." style="opacity: {$clickOpacity}%" />
</div>

<style>
	div {
		z-index: -1;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	img {
		vertical-align: middle;
		width: 50%;
		object-fit: contain;
	}
</style>
