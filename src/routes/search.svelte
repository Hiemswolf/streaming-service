<script lang="ts">
	import { searchQuery } from '$lib/stores';
	export async function load({ page }) {
		searchQuery.set(page.query.get('q'));
	}
</script>

<h1>Search</h1>
<p>
	{$searchQuery}
</p>
