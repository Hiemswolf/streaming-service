<script lang="ts">
	import '@src/style.css';
	import Nav from '@components/Nav.svelte';
	import Foot from '@components/Foot.svelte';
	import { prefetchRoutes } from '$app/navigation';
	import { onMount } from 'svelte';

	let darkMode = true;
	onMount(() => {
		let darkPref;
		const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
		darkPref = matchDark.matches;
		matchDark.addEventListener('change', (evt) => {
			darkPref = evt.matches;
			darkMode = darkPref;
		});
		darkMode = darkPref;

		prefetchRoutes();
	});
</script>

<div id="app" class:dark={darkMode}>
	<div id="container">
		<div id="top-content">
			<Nav />
			<div id="page">
				<slot />
			</div>
		</div>
		<div id="middle-content" />
		<div id="bottom-content" />
	</div>
	<div class="footer">
		<Foot />
	</div>
</div>
