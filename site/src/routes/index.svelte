<script lang="ts">
	import GlobalCounter from '$lib/components/GlobalCounter.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="box">
    <GlobalCounter />
    <Counter />
    <Button />
</div>

<style>
    .box {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>