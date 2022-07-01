import { get, writable, type Writable } from 'svelte/store';
import { dev } from '$app/env';

export const API_URL: string = dev ? 'http://localhost:8080' : 'https://api.howsthevolu.me';

export const localCount = ((): Writable<number> => {
	if (typeof localStorage !== 'undefined') {
		const storedCount = localStorage.getItem('localCount');
		if (storedCount == null) {
			return writable(0);
		} else {
			const parsed = parseInt(storedCount, 10);
			if (isNaN(parsed)) {
				return writable(0);
			} else {
				return writable(parsed);
			}
		}
	} else {
		return writable(0);
	}
})();

const getGlobalCount = async (): Promise<number> => {
	try {
		const resp = await fetch(`${API_URL}/count`);

		if (resp.ok) {
			const json = await resp.json();
			const parsed = parseInt(json['count'], 10);
			if (!isNaN(parsed)) {
				return parsed;
			}
		}

		return 0;
	} catch {
		return 0;
	}
};

export const incrementGlobalCount = async () => {
	globalCount.update((c) => c + 1);
	await fetch(`${API_URL}/increment`, { method: 'POST' });
};

export const globalCount = writable(await getGlobalCount(), (set) => {
	const interval = setInterval(async () => {
		const newVal = await getGlobalCount();

		// Some ugly code to make a pretty count-up.
		let currentVal = get(globalCount);
		const timer = setInterval(() => {
			if (currentVal >= newVal) {
				clearInterval(timer);
			} else {
				currentVal += 1;
				set(currentVal);
			}
		}, 10);
	}, 20 * 1000);

	return () => {
		clearInterval(interval);
	};
});

export const clickOpacity = writable(0);
