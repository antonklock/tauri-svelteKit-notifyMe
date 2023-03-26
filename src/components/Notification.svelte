<script lang="ts"> 
    import { removeNotification, removeNotificationById } from '../data/notificationList';
	import SimpleButton from './SimpleButton.svelte';

    export let id: string;
    export let title = 'Notification';
    export let body = 'This is the notification body!';
    export let intervalInSeconds = 120;
    
    const startNotificationOnInterval = (intervalInSeconds: number) => {
        const isRunning = () => {
            return intervalID !== undefined;
        }

        let intervalID: number | undefined;
        
        ///////////////////////////////
        ///TODO: Replace setInterval with custom timer function that can display elapsed time
        ///////////////////////////////

        //A function that will be called every intervalInSeconds seconds and that can display elapsed time use the computer clock as a reference
        // const timer = () => {
        //     const startTime = new Date().getTime();
        //     let elapsedTime = 0;
        //     let intervalID = setInterval(() => {
        //         elapsedTime = new Date().getTime() - startTime;
        //         console.log(elapsedTime);
        //     }, 1000);
        // }

        //use modulus to check if the elapsed time is a multiple of the intervalInSeconds
        // const timer = () => {
        //     const startTime = new Date().getTime();
        //     let elapsedTime = 0;
        //     let intervalID = setInterval(() => {
        //         elapsedTime = new Date().getTime() - startTime;
        //         if(elapsedTime % (intervalInSeconds * 1000) === 0) {
        //             console.log(elapsedTime);
        //         }
        //     }, 1000);
        // }
        

        intervalID = setInterval(() => {
            console.log(`Show notification: ${id}`);
        }, intervalInSeconds * 1000);

        const stopInterval = () => {
            clearInterval(intervalID);
            intervalID = undefined;
            console.log("Stopping interval...");
        }

        return {
            stopInterval,
            isRunning
        }
    }

    let intervalObj = startNotificationOnInterval(intervalInSeconds);

    const updateInterval = () => {
        if(intervalObj.isRunning()) {
            intervalObj.stopInterval();
            console.log("Updating interval...");
            intervalObj = startNotificationOnInterval(intervalInSeconds);
        } 
    }

    const stopInterval = () => {
        intervalObj.stopInterval();
    }

    const startInterval = () => {
        if(intervalObj.isRunning()) {
            intervalObj.stopInterval();
            console.log("Restarting interval...");
        }
        
        console.log("Starting interval...");
        intervalObj = startNotificationOnInterval(intervalInSeconds);
    }
    
</script>

<div>
    <h2>{title}</h2>
    <p>{body}</p>
    <p>Id: {id}</p>
    <input type="number" bind:value={intervalInSeconds} on:change={updateInterval} />
    <button on:click={() => removeNotificationById(id)}>Remove notification</button>
    <button on:click={() => stopInterval()}>Stop interval</button>
    <button on:click={() => startInterval()}>Start interval</button>
</div>

<style>
    div {
        background-color: #f1f1f1;
        padding: 10px;
        margin: 10px;
    }
</style>