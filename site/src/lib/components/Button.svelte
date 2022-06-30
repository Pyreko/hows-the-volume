<script lang="ts">
    import { localCount, incrementGlobalCount, API_URL } from "$lib/store"

    function increment() {
        localCount.update(c => c + 1);
        localStorage.setItem("localCount", $localCount.toString());
        incrementGlobalCount();
    }

    async function onClick() {
        increment();
        
        const num = Math.floor(Math.random() * 7);

        const audio = new Audio(`${API_URL}/sound/${num}`);
        audio.play();
    }
</script>


<button on:click={onClick}>
    Check the volume
</button>

<style>

</style>