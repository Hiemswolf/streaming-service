<script lang="ts">
	let showPassword = false;
	function handleSubmit() {}
</script>

<form class="sign-up-form" on:submit|preventDefault={handleSubmit}>
	<h1>Sign Up</h1>
	<div>
		<input type="text" placeholder="Username" required />
	</div>
	<div>
		<input type="email" placeholder="Email" required />
	</div>
	<div>
		<input type={showPassword ? 'text' : 'password'} placeholder="Password" required />
		<input type="checkbox" title="Show Password" bind:checked={showPassword} />
	</div>
	<br />
	<input type="submit" value="Create Account" />
</form>
