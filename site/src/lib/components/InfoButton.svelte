<script lang="ts">
	type Props = {
		openModal: () => void;
	};

	let { openModal }: Props = $props();

	function openInfoModal() {
		openModal();
	}
</script>

<button onclick={openInfoModal}> i </button>

<style>
	button {
		background-color: #e10e5a;
		color: white;
		font-size: 16px;
		font-family: 'Riffic', sans-serif;
		width: 25px;
		height: 25px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		text-align: center;
		line-height: 16px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	button:hover {
		background-color: #a20349;
	}
</style>
