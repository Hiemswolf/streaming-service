<script lang="ts">
	import { goto } from '$app/navigation';
	import { searchQuery } from '@src/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let query = get(searchQuery);

	function handleSubmit() {
		searchQuery.set(query);
		query = get(searchQuery);
	}
</script>

<form class="search-form" action="/search" on:submit|preventDefault>
	<input type="text" placeholder="Search" name="q" bind:value={query} /><a
		sveltekit:prefetch
		href={`/search${query && query.trim() ? `?q=${query}` : ''}`}
		><button type="submit" on:click={handleSubmit}>Go</button></a
	>
</form>
