<script lang="ts">
	import { user } from '@src/stores';
	import Calendar from '@src/components/Calendar';
</script>

<h1>Welcome to SERVICE{$user ? ` ${$user.nick || $user.name}` : ''}.</h1>
<img src="https://getwallpapers.com/wallpaper/full/5/1/2/299626.jpg" alt="" />
