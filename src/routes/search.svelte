<script lang="ts">
	import { searchQuery } from '@src/stores';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	let query = get(page).url.searchParams.get('q');
	page.subscribe((newPage) => {
		query = newPage.url.searchParams.get('q');
		searchQuery.set(query);
	});
</script>

<h1>Search</h1>
<p>
	{query}
</p>
