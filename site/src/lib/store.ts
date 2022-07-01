import { get, writable } from 'svelte/store';
import { dev } from '$app/env';

export const API_URL: string = dev ? 'http://localhost:8080/api' : 'https://howsthevolu.me/api';

const getLocalCount = () => {
	if (typeof localStorage !== 'undefined') {
		const storedCount = localStorage.getItem('localCount');
		if (storedCount == null) {
			return 0;
		} else {
			const parsed = parseInt(storedCount, 10);
			if (isNaN(parsed)) {
				return 0;
			} else {
				return parsed;
			}
		}
	} else {
		return 0;
	}
};

export const localCount = writable(getLocalCount());

export const getGlobalCount = async (): Promise<number> => {
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

export const globalCount = writable(0, (set) => {
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
