import {
	writable,
	// readable,
	// derived
} from "svelte/store";
import { invalidate } from '$app/navigation';

type User = {
	name: string,
	nick?: string,
};

export const user = writable<User>(null);

export const searchQuery = (() => {
	const { subscribe, update, set } = writable('');

	return {
		subscribe,
		update,
		set: (val) => {
			set(val ? val.trim().replace(/\s+/g, ' ') : val);
		}
	};
})();
