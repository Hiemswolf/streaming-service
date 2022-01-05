<script lang="ts">
	import { user } from '@src/stores';
	import Calendar from '@src/components/Calendar';
</script>

<h1>Welcome to SERVICE{$user ? ` ${$user.nick || $user.name}` : ''}.</h1>
