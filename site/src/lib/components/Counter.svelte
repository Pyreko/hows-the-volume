<script lang="ts">
    import { localCount } from "$lib/store"
</script>

<p>Volumes Checked: {$localCount.toLocaleString()}</p>

<style>
    p {
        font-family: 'Riffic', sans-serif;
    }
</style>