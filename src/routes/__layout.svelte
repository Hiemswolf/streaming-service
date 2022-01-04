<script lang="ts">
	import '../global.css';
	import Navigation from '../lib/components/Navigation.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>

<style>
	main {
		background-color: black;
	}
</style>
