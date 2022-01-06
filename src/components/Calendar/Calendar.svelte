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

<div
	class={`Calendar ${firstDayOfTheMonth
		.toLocaleString('default', { month: 'short' })
		.toLowerCase()}`}
>
	<div class="banner">
		<div class="banner__header">
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
		<div class="weekdays days">
			{#each days.slice(7, 14) as day}
				<div
					class="weekday day"
					class:thisWeekday={today.getFullYear() == day.getFullYear() &&
						today.getMonth() == day.getMonth() &&
						today.getDay() == day.getDay()}
				>
					{day.toLocaleString('default', { weekday: 'narrow' })}
				</div>
			{/each}
		</div>
	</div>

	<div class="days">
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
		resize: both;
		overflow: auto;
	}
	.banner__header {
		height: 10rem;
		color: whitesmoke;
		overflow: hidden;
	}
	.banner__header > * {
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
		gap: 0;
		grid-template-columns: repeat(7, 30px);
		justify-content: center;
	}
	.day {
		color: black;
		padding: 5px;
	}
	.weekdays {
		background-color: #0000003d;
	}
	.weekday {
		display: inline-block;
		text-transform: uppercase;
		font-weight: bold;
		color: black;
	}
	.thisWeekday {
		background-color: #0000001a;
	}
	.notInThisMonth {
		opacity: 0.2;
	}
	.today {
		font-weight: bold;
		outline-style: solid;
		outline-width: 1px;
		border-radius: 5px;
	}

	.banner {
		background-color: gray;
	}
	.jan .banner {
		/* darkslategray */
		background-color: #144ebb;
	}
	.feb .banner {
		background-color: #a11d3e;
	}
	.mar .banner {
		background-color: #4f9932;
	}
	.apr .banner {
		background-color: #bd4858;
	}
	.may .banner {
		background-color: #ec74c8;
	}
	.jun .banner {
		background-color: #4f9ee2;
	}
	.jul .banner {
		background-color: #0a3161;
	}
	.aug .banner {
		background-color: #ad3a32;
	}
	.sep .banner {
		background-color: #bd993f;
	}
	.oct .banner {
		background-color: #dd6017;
	}
	.nov .banner {
		background-color: #6b3c26;
	}
	.dec .banner {
		background-color: #1e306b;
	}
</style>
