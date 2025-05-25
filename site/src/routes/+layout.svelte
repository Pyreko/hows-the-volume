<script lang="ts">
	import '../styles/fonts.css';
	import '@fontsource-variable/fredoka';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
