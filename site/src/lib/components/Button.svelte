<script lang="ts">
    import { localCount, incrementGlobalCount, API_URL } from "$lib/store"

    function onIncrement() {
        localCount.update(c => c + 1);
        localStorage.setItem("localCount", $localCount.toString());
        incrementGlobalCount();
    }

    function randomInt(maxVal: number) {
        return Math.floor(Math.random() * (maxVal + 1));
    }

    let audioContext : AudioContext | undefined = undefined;
    async function onClick() {
        onIncrement();
        
        // Get the audio track from the server...
        const audioTrack = randomInt(6)
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


<button on:click={onClick}>
    Check the volume
</button>

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
        cursor:pointer;
    }

 
</style>