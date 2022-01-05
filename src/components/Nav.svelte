<script lang="ts">
	import Search from './Search.svelte';
	import { user } from '@src/stores';
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

<nav>
	<div>
		<a sveltekit:prefetch href="/" class="home-link">Service</a>
		<Search />
	</div>
	<div>
		{#if loggedIn}
			<strong>{$user.nick || $user.name}</strong>
			<button on:click={logOut}>Log Out</button>
		{:else}
			<button on:click={logIn}>Log In</button>
			<a href="/sign-up"><button>Sign Up</button></a>
		{/if}
	</div>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: var(--theme-nav);
		color: white;
	}
	nav a {
		color: white;
	}
	.home-link {
		text-transform: uppercase;
	}
</style>
