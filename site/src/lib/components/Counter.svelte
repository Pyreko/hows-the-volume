<script lang="ts">
    import { localCount } from "$lib/store"
</script>

<p>Volumes checked: {$localCount.toLocaleString()}</p>

<style>
    p {
        font-family: 'Riffic', sans-serif;
        font-size: large;
    }
</style>