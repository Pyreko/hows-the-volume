<script lang="ts">
	import { clickOpacity, localCount, incrementGlobalCount, API_URL } from '$lib/store';
	import { onDestroy } from 'svelte';

	let clickTimeout: undefined | ReturnType<typeof setTimeout> = undefined;
	let clickTimer: undefined | ReturnType<typeof setInterval> = undefined;
	let numAudioTracks: undefined | number = undefined;

	/**
	 *  Returns a random value from 0 to the given `maxVal`.
	 */
	function randomInt(maxVal: number) {
		return Math.floor(Math.random() * (maxVal + 1));
	}

	const DEFAULT_NUM_AUDIO_TRACKS = 43;
	const getNumAudioTracks = async (): Promise<number> => {
		try {
			const resp = await fetch(`${API_URL}/num-files`);

			if (resp.ok) {
				const json = await resp.json();
				const parsed = parseInt(json['count'], 10);
				if (!isNaN(parsed)) {
					return parsed;
				}
			}

			return DEFAULT_NUM_AUDIO_TRACKS;
		} catch {
			return DEFAULT_NUM_AUDIO_TRACKS;
		}
	};

	function onIncrement() {
		if (clickTimeout !== undefined) {
			clearTimeout(clickTimeout);
		}

		if (clickTimer != undefined) {
			clearInterval(clickTimer);
		}

		clickTimeout = setTimeout(() => {
			let currentVal = $clickOpacity;

			clickTimer = setInterval(() => {
				if (currentVal <= 0) {
					clearInterval(clickTimer);
				} else {
					currentVal -= 0.5;
					clickOpacity.set(currentVal);
				}
			}, 50);
		}, 7 * 1000);

		clickOpacity.update((c) => {
			const newVal = c + 0.25;
			return Math.min(newVal, 100);
		});

		localCount.update((c) => c + 1);
		localStorage.setItem('localCount', $localCount.toString());
		incrementGlobalCount();
	}

	let audioContext: AudioContext | undefined = undefined;

	async function onClick() {
		onIncrement();

		if (numAudioTracks === undefined) {
			numAudioTracks = (await getNumAudioTracks()) - 1;
		}
		// Get the audio track from the server...
		const audioTrack = randomInt(numAudioTracks);
		const audio = new Audio();
		audio.crossOrigin = 'anonymous';
		audio.src = `${API_URL}/sound/${audioTrack}`;
		audio.autoplay = true;

		// Now stick it in a random channel from -1 to 1.
		if (audioContext == undefined) {
			audioContext = new AudioContext();
		}

		if (audioContext != undefined) {
			const src = audioContext.createMediaElementSource(audio);
			const pan = randomInt(2) - 1; // Random value from -1, 0, and 1.
			const stereoNode = new StereoPannerNode(audioContext, { pan });
			src.connect(stereoNode).connect(audioContext.destination);
		}

		await audio.play();
	}

	onDestroy(() => {
		if (audioContext != undefined) {
			audioContext.close();
		}
	});
</script>

<button onclick={onClick}> Check the volume </button>

<style>
	button {
		background-color: #e00c59;
		color: white;
		font-family: 'Riffic', sans-serif;
		font-size: medium;
		padding: 10px 16px;
		text-align: center;
		text-decoration: none;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}

	button:hover {
		background-color: #a20349;
	}
</style>
