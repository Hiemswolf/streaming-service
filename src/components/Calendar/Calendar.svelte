<script>
	const today = new Date();
	export let firstDayOfTheWeek = 0;
	export let selectedYear = today.getFullYear();
	export let selectedMonth = today.getMonth();

	$: firstDayOfTheMonth = new Date(selectedYear, selectedMonth);
	$: lastDayOfTheMonth = new Date(selectedYear, selectedMonth + 1, -1);

	let days;
	$: {
		days = [];

		let pageFirstDay = firstDayOfTheWeek - firstDayOfTheMonth.getDay() + 1;
		let pageLength =
			-pageFirstDay + lastDayOfTheMonth.getDate() + (6 - lastDayOfTheMonth.getDay()) + 1;

		for (let i = 0; i < pageLength; i++) {
			days = [...days, new Date(selectedYear, selectedMonth, pageFirstDay + i)];
		}
	}

	function incrementMonth() {
		selectedMonth++;
		if (selectedMonth > 11) {
			selectedMonth = 0;
			selectedYear++;
		}
	}
	function decrementMonth() {
		selectedMonth--;
		if (selectedMonth < 0) {
			selectedMonth = 11;
			selectedYear--;
		}
	}
</script>

<div class="Calendar">
	<div class="header">
		<button
			type="button"
			class="change-month prev-month"
			title="Previous Month"
			on:click={decrementMonth}>&#10094</button
		>
		<button
			type="button"
			class="change-month next-month"
			title="Next Month"
			on:click={incrementMonth}>&#10095</button
		>
		<div class="month">
			<h1>{firstDayOfTheMonth.toLocaleString('default', { month: 'long' })}</h1>
			<h6>{firstDayOfTheMonth.toLocaleString('default', { year: 'numeric' })}</h6>
		</div>
	</div>
	<div class="days">
		{#each days.slice(0, 7) as day}
			<div
				class="weekday"
				class:thisWeekday={today.getFullYear() == day.getFullYear() &&
					today.getMonth() == day.getMonth() &&
					today.getDay() == day.getDay()}
			>
				{day.toLocaleString('default', { weekday: 'narrow' })}
			</div>
		{/each}
		{#each days as day}
			<div
				class="day"
				class:notInThisMonth={day.getMonth() != selectedMonth}
				class:today={today.getFullYear() == day.getFullYear() &&
					today.getMonth() == day.getMonth() &&
					today.getDate() == day.getDate()}
			>
				{day.toLocaleString('default', { day: '2-digit' })}
			</div>
		{/each}
	</div>
</div>

<style>
	.Calendar {
		text-align: center;
		background-color: whitesmoke;
	}
	.header {
		background-color: darkslategray;
		height: 10rem;
		color: whitesmoke;
		overflow: hidden;
	}
	.header > * {
		height: 100%;
	}
	.month {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
	}
	.change-month {
		background-color: transparent;
		font-size: large;
		border: none;
		width: 15%;
		opacity: 0.5;
		color: whitesmoke;
	}
	.change-month:hover {
		background-color: rgba(245, 245, 245, 0.1);
		opacity: 1;
	}
	.prev-month {
		float: left;
	}
	.next-month {
		float: right;
	}
	.days {
		display: grid;
		gap: 50px;
		grid-template-columns: auto auto auto auto auto auto auto;
		justify-content: center;
	}
	.day {
		color: black;
		padding: 5px;
	}
	.weekday {
		text-transform: uppercase;
		font-weight: bold;
	}
	.thisWeekday {
		text-decoration: underline;
	}
	.notInThisMonth {
		opacity: 0.2;
	}
	.today {
		font-weight: bold;
		color: whitesmoke;
		background-color: darkslategray;
	}
</style>
