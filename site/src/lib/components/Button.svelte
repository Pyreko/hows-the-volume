<script lang="ts">
	import { clickOpacity, localCount, incrementGlobalCount, API_URL } from '$lib/store';

	let clickTimeout: undefined | ReturnType<typeof setTimeout> = undefined;
	let clickTimer: undefined | ReturnType<typeof setInterval> = undefined;

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
		}, 5 * 1000);

		clickOpacity.update((c) => {
			const newVal = c + 0.25;
			return Math.min(newVal, 100);
		});

		localCount.update((c) => c + 1);
		localStorage.setItem('localCount', $localCount.toString());
		incrementGlobalCount();
	}

	function randomInt(maxVal: number) {
		return Math.floor(Math.random() * (maxVal + 1));
	}

	let audioContext: AudioContext | undefined = undefined;
	async function onClick() {
		onIncrement();

		// Get the audio track from the server...
		const audioTrack = randomInt(6);
		const audio = new Audio();
		audio.crossOrigin = 'anonymous';
		audio.src = `${API_URL}/sound/${audioTrack}`;

		// Now stick it in a random channel from -1 to 1.
		if (audioContext == undefined) {
			audioContext = new AudioContext();
		}

		if (audioContext != undefined) {
			const src = audioContext.createMediaElementSource(audio);
			const pan = randomInt(2) - 1;
			const stereoNode = new StereoPannerNode(audioContext, { pan });
			src.connect(stereoNode).connect(audioContext.destination);
		}

		audio.play();
	}
</script>

<button on:click={onClick}> Check the volume </button>

<style>
	button {
		background-color: #ff1377;
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
		background-color: #db005c;
	}
</style>
