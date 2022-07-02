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
					This is a site for <a
						href="https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"
						target="_blank">IRyS</a
					>, one of Hololive's resident <strike>pons</strike> VSingers! Inspired by
					<a href="https://impomu.com/" target="_blank">impomu</a>
					and <a href="https://faunaraara.com/" target="_blank">faunaraara</a>.
				</p>
				<p>
					For those interested in the source code for both the site and server, it can be found <a
						href="https://github.com/Pyreko/hows-the-volume"
						target="_blank">over here on GitHub</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Where's the volume?</h1>
				<p>
					All voice clips (and their sources when I get around to it) can also be found in the <a
						href="https://github.com/Pyreko/hows-the-volume/tree/main/server/assets"
						target="_blank">GitHub repo</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Credits</h1>
				<p>Lots of stuff was used or referred to in order to make this site:</p>
				<ul>
					<li>
						<p>
							<a href="https://twitter.com/chrone_co/status/1426878310328332292" target="_blank"
								>Chroneco's emotes and tweet</a
							> were used for the favicon and inspiration for theming.
						</p>
					</li>
					<li>
						<p>
							The font used throughout is <a
								href="https://www.fontspring.com/fonts/inky-type/riffic"
								target="_blank">Riffic Free Bold</a
							>.
						</p>
					</li>
					<li>
						<p>
							The frontend is written in <a href="https://svelte.dev/" target="_blank">Svelte</a>.
						</p>
					</li>
					<li>
						<p>
							The backend is written in <a href="https://www.rust-lang.org/" target="_blank">Rust</a
							>, using the
							<a href="https://github.com/tokio-rs/axum" target="_blank">axum framework</a>.
						</p>
					</li>
				</ul>
			</div>
			<div class="text-block">
				<h1>Something not working?</h1>
				<p>
					If you find something not working, please report it <a
						href="https://github.com/Pyreko/hows-the-volume/issues"
						target="_blank">here</a
					>!
				</p>
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
		width: 1000px;
		max-width: 95%;
		height: auto;
		max-height: 100%;
		position: relative;
		overflow: visible;
	}

	.close {
		font-family: 'Riffic', sans-serif;
		position: absolute;
		width: 18px;
		height: 18px;
		top: 0;
		right: 0;
		margin-top: 2px;
		margin-right: 10px;
		background-color: transparent;
		border: 0;
		font-size: 18px;
		color: darkgray;
		cursor: pointer;
	}

	.close:hover {
		color: gray;
	}

	.modal-body {
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
	.text-block a,
	.text-block ul {
		font-size: medium;
		margin: 0px;
	}
</style>