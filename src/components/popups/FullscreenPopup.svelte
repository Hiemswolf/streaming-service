<script>
</script>

<div class="FullscreenPopup">
	<div class="popup__content">
		<slot>Popup</slot>
	</div>
</div>

<style>
	.FullscreenPopup {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
	}
	.hide {
		display: none;
	}
</style>
