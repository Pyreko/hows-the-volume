<script lang="ts">
    import { globalCount } from "$lib/store"
</script>

<div class="globalCountWrap">
    <h1>{$globalCount.toLocaleString()}</h1>
    <p>Volumes Checked Globally</p>
</div>

<style>
    .globalCountWrap {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
    }

    .globalCountWrap h1 {
        margin: 0px;
        font-size: 3em;
        font-family: 'Riffic', sans-serif;
    }

    .globalCountWrap p {
        margin: 0px;
        font-family: 'Riffic', sans-serif;
    }
</style>