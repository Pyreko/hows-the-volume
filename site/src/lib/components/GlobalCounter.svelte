<script lang="ts">
	import { globalCount } from '$lib/store';
</script>

<div class="gl-count-wrapper">
	<p>Volumes checked across the world:</p>
	<h1>{$globalCount.toLocaleString()}</h1>
</div>

<style>
	.gl-count-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.1em;
		align-items: center;
		justify-content: center;
	}

	.gl-count-wrapper h1 {
		margin: 0px;
		font-size: 4em;
		font-family: 'Riffic', sans-serif;
	}

	.gl-count-wrapper p {
		margin: 0px;
        font-size: 2em;
		font-family: 'Riffic', sans-serif;
	}
</style>
