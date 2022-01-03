<script lang="ts">
	import { user } from '../lib/stores';
</script>

<h1>Welcome to SERVICE{$user ? ` ${$user.nick || $user.name}` : ''}.</h1>
