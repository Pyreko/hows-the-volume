<script lang="ts">
    import { localCount } from "$lib/store"
</script>

<p>Volumes checked: {$localCount.toLocaleString()}</p>

<style>
    p {
        font-family: 'Riffic', sans-serif;
        font-size: large;
        margin-top: 1.75rem;
        margin-bottom: 0.75rem;
    }
</style>