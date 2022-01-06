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
<nav>
	<div>
		<a sveltekit:prefetch href="/" class="home-link" on:click|preventDefault={() => goto('/')}
			>Service</a
		>
		<Search />
	</div>
	<div>
		{#if loggedIn}
			<strong>{$user.nick || $user.name}</strong>
			<button on:click={logOut}>Log Out</button>
		{:else}
			<button on:click={logIn}>Log In</button><a href="/sign-up"><button>Sign Up</button></a>
		{/if}
	</div>
</nav>
<div id="nav-end" />

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

	#skip-nav {
		position: absolute;
		background-color: whitesmoke;
		padding: 0 0.5em 0.5em;
		border-radius: 0 0 0.5em 0.5em;
		transform: translateY(-120%);
		transition: transform 30ms ease;
	}
	#skip-nav:focus {
		transform: translateY(0);
	}
</style>
