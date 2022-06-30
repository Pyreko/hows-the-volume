import { writable, type Writable } from 'svelte/store';

export const API_URL = 'http://localhost:8080';

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
		set(await getGlobalCount());
	}, 20 * 1000);

	return () => {
		clearInterval(interval);
	};
});
