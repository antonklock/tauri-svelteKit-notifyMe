<script lang="ts">
	import { compute_rest_props } from 'svelte/internal';
	import { removeNotificationById } from '../data/notificationList';

	export let id: string;
	export let title = 'Notification';
	export let body = 'This is the notification body!';
	export let intervalInSeconds = 120;

	type TimerObj = {
		startTimer: () => void;
		stopTimer: () => void;
		isRunning: () => boolean;
	};

	const notificationTimer = (timerInterval: number) => {
		const isRunning = () => {
			return interval !== undefined;
		};

		let interval: number | undefined;

		const startTimer = () => {
			if (!interval) {
				let startTime = new Date().getTime();
				let elapsedTime = 0;
				interval = setInterval(() => {
					elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
					if (elapsedTime % timerInterval === 0) {
						console.log('Show notification: ' + id);
					}
				}, 1000);
			}
		};

		const stopTimer = () => {
			if (interval) {
				clearInterval(interval);
				interval = undefined;
			}
		};

		return {
			isRunning,
			startTimer,
			stopTimer
		};
	};

	const startTimer = () => {
		if (timerObj.isRunning()) timerObj.stopTimer();
		timerObj = notificationTimer(intervalInSeconds);
		timerObj.startTimer();
	};

	const updateTimer = () => {
		if (timerObj.isRunning()) {
			timerObj.stopTimer();
			timerObj = notificationTimer(intervalInSeconds);
			timerObj.startTimer();
		}
	};

	const stopTimer = () => {
		if (timerObj) {
			timerObj.stopTimer();
		}
	};

	let timerObj = notificationTimer(intervalInSeconds);
	timerObj.startTimer();
</script>

<div>
	<h2>{title}</h2>
	<p>{body}</p>
	<p>Id: {id}</p>
	<input type="number" bind:value={intervalInSeconds} on:change={updateTimer} />
	<button on:click={() => removeNotificationById(id)}>Remove notification</button>
	<button on:click={startTimer}> Start notification timer </button>
	<button on:click={stopTimer}>Stop notification timer</button>
	<!-- <button on:click={() => stopInterval()}>Stop interval</button>
    <button on:click={() => startInterval()}>Start interval</button> -->
</div>

<style>
	div {
		background-color: #f1f1f1;
		padding: 10px;
		margin: 10px;
	}
</style>
