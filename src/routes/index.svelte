<script lang="ts">
	import { user } from '../lib/stores';
	import Calendar from '$lib/components/Calendar';
</script>

<h1>Welcome to SERVICE{$user ? ` ${$user.nick || $user.name}` : ''}.</h1>
<Calendar />
