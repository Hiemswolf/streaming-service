import {
	writable,
	// readable,
	// derived
} from "svelte/store";

type User = {
	name: string,
	nick?: string,
};

export const user = writable<User>(null);

export const searchQuery = writable<string>();
