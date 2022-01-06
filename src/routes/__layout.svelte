<script lang="ts">
	import '@src/style.css';
	import Nav from '@components/Nav.svelte';
	import Foot from '@components/Foot.svelte';
	import Popup from '@src/components/popups/FullscreenPopup.svelte';
	import { prefetchRoutes } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => prefetchRoutes());

	let darkMode = true;
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

<style>
	#app {
		background-color: var(--theme-bg);
	}
	#container {
		width: 100%;
		min-height: 100vh;
		color: whitesmoke;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
