<script lang="ts">
	import Search from './Search.svelte';
	import { user } from '@src/stores';
	import { goto } from '$app/navigation';
	let loggedIn = false;

	function logIn() {
		loggedIn = true;
		$user = {
			name: 'Clayton'
		};
	}
	function logOut() {
		loggedIn = false;
	}
</script>

<a id="skip-nav" href="#nav-end">Skip Navagation</a>
<nav id="nav" class="nav">
	<div>
		<a sveltekit:prefetch href="/" class="home-link" on:click|preventDefault={() => goto('/')}
			><h1>Service</h1></a
		>
		<Search />
	</div>
	<div class="login-buttons">
		{#if loggedIn}
			<strong>{$user.nick || $user.name}</strong>
			<button on:click={logOut}>Log Out</button>
		{:else}
			<button on:click={logIn}>Log In</button>
			<a href="/sign-up"><button>Sign Up</button></a>
		{/if}
	</div>
</nav>
<div id="nav-end" />
