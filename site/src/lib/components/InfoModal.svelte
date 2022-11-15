<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function closeInfoModal() {
		dispatch('message');
	}

	function onKeyPress(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeInfoModal();
		}
	}
</script>

<svelte:window on:keydown={onKeyPress} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="modal-background" on:click={closeInfoModal} transition:fade={{ duration: 100 }}>
	<div class="modal-wrapper" on:click|stopPropagation>
		<div class="modal-header">
			<h1>About</h1>
			<button class="close" on:click={closeInfoModal}>✕</button>
		</div>
		<div class="modal-body">
			<div class="text-block">
				<h1>What is this?</h1>
				<p>
					This is a site for <a
						href="https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"
						target="_blank"
						rel="noopener noreferrer">IRyS</a
					>, one of Hololive's resident <strike>pons</strike> VSingers and our favourite lovable
					nephilim! The general premise is inspired by
					<a href="https://impomu.com/" target="_blank" rel="noopener noreferrer">impomu</a>
					and
					<a href="https://faunaraara.com/" target="_blank" rel="noopener noreferrer">faunaraara</a
					>.
				</p>
				<p>
					The original motivation for this website was to celebrate her first anniversary, though I
					released the site a bit earlier.
				</p>
				<p>
					For those interested in the source code for both the site and server, it can be found <a
						href="https://github.com/Pyreko/hows-the-volume"
						target="_blank"
						rel="noopener noreferrer">over here on GitHub</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Where's the volume?</h1>
				<p>
					All voice clips and their sources can also be found in the <a
						href="https://github.com/Pyreko/hows-the-volume/tree/main/server/assets/README.md"
						target="_blank"
						rel="noopener noreferrer">here</a
					>.
				</p>
			</div>
			<div class="text-block">
				<h1>Credits</h1>
				<p>
					I couldn't have done this alone! Lots of stuff was used or referred to in order to make
					this site:
				</p>
				<ul>
					<li>
						<p>
							<a
								href="https://twitter.com/chrone_co/status/1426878310328332292"
								target="_blank"
								rel="noopener noreferrer">Chroneco's emotes and tweet</a
							> were used for the favicon, some elements, and inspiration for theming.
						</p>
					</li>
					<li>
						<p>
							The font used throughout is <a
								href="https://www.fontspring.com/fonts/inky-type/riffic"
								target="_blank"
								rel="noopener noreferrer">Riffic Free Bold</a
							>.
						</p>
					</li>
					<li>
						<p>
							The frontend is written in <a
								href="https://svelte.dev/"
								target="_blank"
								rel="noopener noreferrer">Svelte</a
							>.
						</p>
					</li>
					<li>
						<p>
							The backend is written in <a
								href="https://www.rust-lang.org/"
								target="_blank"
								rel="noopener noreferrer">Rust</a
							>, using the
							<a href="https://github.com/tokio-rs/axum" target="_blank" rel="noopener noreferrer"
								>axum framework</a
							>.
						</p>
					</li>
					<li>
						<p>Thanks to various people for helping me find all the voice clips.</p>
					</li>
					<li>
						<p>
							<a href="https://impomu.com/" target="_blank" rel="noopener noreferrer">impomu</a> and
							<a href="https://faunaraara.com/" target="_blank" rel="noopener noreferrer"
								>faunaraara</a
							> for the inspiration in the first place.
						</p>
					</li>
					<li>
						<p>
							Background pattern inspired by IRyS's patterns from her <a
								href="https://www.behance.net/gallery/123239061/Virtual-Youtuber-IRyS-Branding/modules/700551439"
								>branding page</a
							>.
						</p>
					</li>
				</ul>
			</div>
			<div class="text-block">
				<h1>Something not working?</h1>
				<p>
					If you find something not working, please report it <a
						href="https://github.com/Pyreko/hows-the-volume/issues"
						target="_blank"
						rel="noopener noreferrer">here</a
					>!
				</p>
			</div>
			<div class="image-block">
				<img src="/images/heart.webp" alt="heart" loading="lazy" />
			</div>
		</div>
	</div>
</div>

<style>
	#modal-background {
		display: flex;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(75, 75, 75, 0.5);
		justify-content: center;
		align-items: center;
	}

	.modal-wrapper {
		position: relative;
		width: 900px;
		max-width: 95%;
		height: auto;
		max-height: 95%;
		border: none;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: white;
	}

	.modal-header {
		display: flex;
		background-color: white;
		flex-direction: row;
		border: none;
		border-bottom-style: solid;
		border-bottom-width: 2px;
		border-bottom-color: whitesmoke;
	}

	.modal-header h1 {
		font-family: sans-serif;
		font-size: 28px;
		flex-grow: 2;
		padding: 16px 0px 16px 22px;
		margin: 0;
		line-height: 28px;
	}

	.close {
		font-family: 'Riffic', sans-serif;
		width: 18px;
		height: 18px;
		background-color: transparent;
		border: 0;
		font-size: 18px;
		color: darkgray;
		cursor: pointer;
		margin-right: 8px;
		margin-top: 4px;
		padding: 0;
	}

	.close:hover {
		color: gray;
	}

	.modal-body {
		display: flex;
		flex-direction: column;
		gap: 1.75em;
		justify-content: start;
		padding: 12px 22px 26px 22px;
		overflow-y: auto;
	}

	.text-block {
		font-family: sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
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

	.image-block {
		text-align: center;
	}

	.image-block > img {
		width: 96px;
		height: auto;
	}
</style>
