<script context="module">
	export async function load({ page }) {
		const { params } = page;
		return { props: { id: params.id } };
	}
</script>

<script>
	export let src;
</script>
