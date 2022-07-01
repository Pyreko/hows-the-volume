<script lang="ts">
	import { globalCount } from '$lib/store';
</script>

<div class="globalCountWrap">
	<p>Volumes checked across the world:</p>
	<h1>{$globalCount.toLocaleString()}</h1>
</div>

<style>
	.globalCountWrap {
		display: flex;
		flex-direction: column;
		gap: 0.1em;
		align-items: center;
		justify-content: center;
	}

	.globalCountWrap h1 {
		margin: 0px;
		font-size: 4em;
		font-family: 'Riffic', sans-serif;
	}

	.globalCountWrap p {
		margin: 0px;
        font-size: 2em;
		font-family: 'Riffic', sans-serif;
	}
</style>
