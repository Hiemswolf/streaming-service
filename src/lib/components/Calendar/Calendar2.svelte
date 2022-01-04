<script>
	const today = new Date();
	let selectedMonth = new Date(today.getFullYear(), today.getMonth());

	const weekStartsWith = 1;

	let page;
	$: {
		(() => {
			page = new Array(6);
			for (let i = 0; i < page.length; i++) {
				page[i] = new Array(7);
			}
			let week = 0;
			let day = weekStartsWith - selectedMonth.getDay() + 1;
			for (let i = 0; i < page.length * page[0].length; i++) {
				page[week][i % page[0].length] = new Date(
					selectedMonth.getFullYear(),
					selectedMonth.getMonth(),
					day
				);

				day++;
				if (i % 7 == 6) week++;
			}
		})();
	}

	function incrementMonth() {
		selectedMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1);
	}
	function decrementMonth() {
		selectedMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1);
	}
</script>

<div class="Calendar">
	<table>
		<thead>
			<tr>
				<th colspan={page[0].length}>
					<div class="header">
						<strong class="month"
							>{selectedMonth.toLocaleString('default', { month: 'long' })}<wbr />
							{selectedMonth.toLocaleString('default', { year: 'numeric' })}</strong
						>
						<wbr />
						<button
							type="button"
							class="change-month prev-month"
							title="Previous Month"
							on:click={decrementMonth}>&#10094;</button
						>
						<button
							type="button"
							class="change-month next-month"
							title="Next Month"
							on:click={incrementMonth}>&#10095;</button
						>
					</div>
				</th>
			</tr>
			<tr>
				{#each page[0] as weekday}
					<th class="weekday">{weekday.toLocaleString('default', { weekday: 'short' })}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each page as week}
				<tr>
					{#each week as day}
						<td
							class:lastMonth={day.getMonth() != selectedMonth.getMonth()}
							class:today={day.getFullYear() == today.getFullYear() &&
								day.getMonth() == today.getMonth() &&
								day.getDate() == today.getDate()}
						>
							{day.toLocaleString('default', { day: '2-digit' })}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.Calendar {
		/* min-width: fit-content; */
		min-height: fit-content;
		overflow: auto;
		resize: both;
		min-width: fit-content;
	}
	table {
		text-align: center;
		border-collapse: collapse;
		width: 100%;
		height: 100%;
		border-style: solid;
		border-color: black;
	}
	table .header {
		background-color: darkslategray;
		white-space: nowrap;
		justify-content: center;
		color: white;
		height: 5rem;
		font-size: 30px;
	}
	table .header > * {
		display: inline-block;
	}
	table thead {
		border-style: none;
		background-color: gray;
	}

	.change-month {
		height: 100%;
		width: 15%;
		background-color: transparent;
		border: none;
		opacity: 0.5;
		color: white;
	}
	.change-month:hover {
		background-color: rgba(245, 245, 245, 0.25);
	}
	.prev-month {
		float: left;
	}
	.next-month {
		float: right;
	}

	.weekday {
		text-transform: uppercase;
	}
	.today {
		color: white;
		font-weight: bold;
		background: blue;
		border-radius: 5rem;
	}
	.lastMonth {
		opacity: 0.2;
	}
</style>
