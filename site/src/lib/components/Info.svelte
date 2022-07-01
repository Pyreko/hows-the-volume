<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function openInfoModal() {
		console.log('sending...');
		dispatch('message');
	}
</script>

<button on:click={openInfoModal}> i </button>

<style>
	button {
		background-color: #ea88af;
		color: white;
		font-size: medium;
		font-family: 'Riffic', sans-serif;
		width: 25px;
		height: 25px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}

	button:hover {
		background-color: #de4984;
	}
</style>
