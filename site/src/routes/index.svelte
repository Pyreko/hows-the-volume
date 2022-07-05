<script lang="ts">
	import GlobalCounter from '$lib/components/GlobalCounter.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Button from '$lib/components/Button.svelte';
	import InfoButton from '$lib/components/InfoButton.svelte';
	import InfoModal from '$lib/components/InfoModal.svelte';
	import Ehe from '$lib/components/Ehe.svelte';
	import Iwys from '$lib/components/Iwys.svelte';
	import { clickOpacity, getGlobalCount, globalCount } from '$lib/store';

	getGlobalCount()
		.then((val) => globalCount.set(val))
		.catch(() => globalCount.set(0));

	let modalVisible = false;

	function openInfoModal() {
		modalVisible = true;
	}

	function closeInfoModal() {
		modalVisible = false;
	}
</script>

<div class="info-wrapper">
	<InfoButton on:message={openInfoModal} />
</div>

{#if modalVisible}
	<InfoModal on:message={closeInfoModal} />
{/if}
{#if $clickOpacity > 0}
	<Ehe />
{/if}

<div class="box">
	<GlobalCounter />
	<Counter />
	<Button />
	<Iwys />
</div>

<style>
	:global(body) {
		background-color: #f6e3f6;
		margin: 0;
	}

	.info-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: 5px;
		margin-top: 5px;
	}

	.box {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
