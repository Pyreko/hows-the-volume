<script lang="ts">
	function closeInfoModal() {
		const modalBackground = document.getElementById('modal-background');
		if (modalBackground != null) {
			modalBackground.style.display = 'none';
		}
	}

	function onKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeInfoModal();
		}
	}
</script>

<svelte:window on:keydown={onKeyPress} />

<div id="modal-background" on:click={closeInfoModal}>
	<div class="modal-wrapper">
		<div class="modal-body" on:click|stopPropagation>
			<button class="close" on:click={closeInfoModal}>✕</button>
			<div class="text-block">
				<h1>What is this?</h1>
				<p>
					This is a little site dedicated to <a
						href="https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g">IRyS</a
					>, one of Hololive's resident <strike>pons</strike> VSingers!
				</p>
				<p>
					For those interested in the source code for both the site and server, it can be found <a
						href="https://github.com/Pyreko/hows-the-volume">over here on GitHub</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Where's the volume?</h1>
				<p>
					All voice clips and their sources can also be found in the <a
						href="https://github.com/Pyreko/hows-the-volume/tree/main/server/assets">GitHub repo</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Credits</h1>
				<p>Lots of stuff was used or referred to in order to make this site:</p>
			</div>
		</div>
	</div>
</div>

<style>
	#modal-background {
		display: none;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.5);
		justify-content: center;
		align-items: center;
	}

	.modal-wrapper {
		width: 60%;
		position: relative;
	}

	.close {
		font-family: 'Riffic', sans-serif;
		position: absolute;
		width: 16px;
		height: 16px;
		top: 0;
		right: 0;
		margin-top: 12px;
		margin-right: 10px;
		background-color: transparent;
		border: 0;
		font-size: 16px;
		color: grey;
	}

	.close:hover {
		color: darkgray;
	}

	.modal-body {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		gap: 1.75em;
		justify-content: center;
		border: none;
		border-radius: 6px;
		padding: 32px 22px;
		background-color: white;
	}

	.text-block {
		font-family: sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	.text-block h1 {
		font-size: larger;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.text-block p,
	.text-block a {
		font-size: medium;
		margin: 0px;
	}
</style>
