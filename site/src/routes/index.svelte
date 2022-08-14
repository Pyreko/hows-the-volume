<script lang="ts">
	import GlobalCounter from '$lib/components/GlobalCounter.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Button from '$lib/components/Button.svelte';
	import InfoButton from '$lib/components/InfoButton.svelte';
	import InfoModal from '$lib/components/InfoModal.svelte';
	import Ehe from '$lib/components/Ehe.svelte';
	import Iwys from '$lib/components/Iwys.svelte';
	import { clickOpacity, getGlobalCount, globalCount } from '$lib/store';
	import Anniversary from '$lib/components/Anniversary.svelte';
	import Diamonds from '$lib/components/Diamonds.svelte';
	import Confetti from '$lib/components/Confetti.svelte';
	import Birthday from '$lib/components/Birthday.svelte';

	getGlobalCount()
		.then((val) => globalCount.set(val))
		.catch(() => globalCount.set(0));

	let modalVisible = false;

	function openInfoModal() {
		modalVisible = true;
	}

	function closeInfoModal() {
		modalVisible = false;
	}

	function isSpecialDay(month: number, day: number): boolean {
		function adjustDate(date: Date, offset: number) {
			date.setUTCHours(date.getUTCHours() + offset);
			return date;
		}

		const min = adjustDate(new Date(), -12);
		const max = adjustDate(new Date(), 14);

		return (
			(min.getUTCMonth() + 1 == month || max.getUTCMonth() + 1 == month) &&
			min.getUTCDate() <= day &&
			day <= max.getUTCDate()
		);
	}

	function isAnniversary(): boolean {
		return isSpecialDay(7, 11);
	}

	function anniversaryYears(): number {
		return new Date().getUTCFullYear() - 2021;
	}

	function isBirthday(): boolean {
		return isSpecialDay(3, 7);
	}

	function shouldShowConfetti(): boolean {
		return isAnniversary() || isBirthday();
	}
</script>

<Diamonds />

<div class="info-wrapper">
	<InfoButton on:message={openInfoModal} />
</div>

{#if modalVisible}
	<InfoModal on:message={closeInfoModal} />
{/if}

{#if $clickOpacity > 0}
	<Ehe />
{/if}

{#if shouldShowConfetti()}
	<Confetti showConfetti={$clickOpacity > 0} />
{/if}

<div class="box">
	{#if isAnniversary()}
		<Anniversary numYears={anniversaryYears()} />
	{/if}

	{#if isBirthday()}
		<Birthday />
	{/if}

	<GlobalCounter />
	<Counter />
	<Button />
	<Iwys />
</div>

<style>
	:global(body) {
		background-color: #f6e3f6;
		margin: 0;
	}

	.info-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: 5px;
		margin-top: 5px;
	}

	.box {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		overflow: auto;
	}
</style>
