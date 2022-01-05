<script lang="ts">
	let showPassword = false;
	function togglePasswordVisiblity() {
		showPassword = !showPassword;
		return showPassword;
	}
	function handleSubmit() {}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>Sign Up</h1>
	<div>
		<input type="text" placeholder="Username" required />
	</div>
	<div>
		<input type="email" placeholder="Email" required />
	</div>
	<div>
		<input type={showPassword ? 'text' : 'password'} placeholder="Password" required />
		<span on:click={togglePasswordVisiblity}>0</span>
	</div>
	<br />
	<input type="submit" value="Create Account" />
</form>

<style>
	form {
		color: blue;
		background-color: gray;
		text-align: center;
	}
</style>
