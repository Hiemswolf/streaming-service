<script lang="ts">
	import { goto } from '$app/navigation';
	import { searchQuery } from '$lib/stores';

	function handleSubmit() {
		goto(`/search?q=${$searchQuery}`);
	}
</script>

<div class="Search">
	<form action="/search" on:submit|preventDefault={handleSubmit}>
		<input type="text" placeholder="Search" name="q" bind:value={$searchQuery} />
		<input type="submit" value="Go" />
	</form>
</div>

<style>
	.Search {
		display: inline-block;
	}
</style>
