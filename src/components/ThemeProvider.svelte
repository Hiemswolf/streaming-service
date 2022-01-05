<script lang="ts">
	import themes from '@src/themes';
	import { onMount } from 'svelte';

	function setCSSVars(theme) {
		const setVar = document.documentElement.style.setProperty;
		setVar('--theme-name', theme.name);
		for (let [key, value] of Object.entries(theme.colors)) {
			setVar(`--theme-${key}`, value.toString());
		}
		console.log('Loaded theme.');
	}
</script>

<svelte:head>
	<script lang="ts">
		setCSSVars(themes.find((theme) => theme.name == 'dark');
	</script>
</svelte:head>

<slot />
