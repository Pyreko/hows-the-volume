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
		bottom: -10px;
		left: 0;
	}

	img {
		width: 50%;
		object-fit: contain;
	}
</style>
