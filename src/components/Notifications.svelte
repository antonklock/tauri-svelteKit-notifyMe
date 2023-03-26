<script lang="ts">
	import { notificationList } from '../data/notificationList';
    import Notification from './Notification.svelte';

    type Notifications = {
        id: string;
        title: string;
        body: string;
        intervalInSeconds: number;
    }[]

    let notifications: Notifications;

    notificationList.subscribe((value) => {
        notifications = value;
    })

</script>
<div>
    {#each notifications as notification}
        <Notification id={notification.id} title={notification.title} body={notification.body} intervalInSeconds={notification.intervalInSeconds}/>
    {/each}
</div>