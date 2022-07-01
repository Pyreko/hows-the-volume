<script lang="ts">
	import GlobalCounter from '$lib/components/GlobalCounter.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Button from '$lib/components/Button.svelte';
	import Info from '$lib/components/Info.svelte';
	import InfoModal from '$lib/components/InfoModal.svelte';
	import Ehe from '$lib/components/Ehe.svelte';

	function openInfoModal() {
		const modalBackground = document.getElementById('modal-background');
		console.log(modalBackground);
		if (modalBackground != null) {
			modalBackground.style.display = 'flex';
		}
	}
</script>

<div class="info-wrapper">
	<Info on:message={openInfoModal} />
</div>

<InfoModal />
<Ehe />

<div class="box">
	<GlobalCounter />
	<Counter />
	<Button />
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
	}
</style>
