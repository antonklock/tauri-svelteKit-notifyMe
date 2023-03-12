<script lang="ts">
	import { notificationList } from '../data/notificationList';
    import Notification from './Notification.svelte';

    // const notificationList = [{
    //     title: 'Notification 1',
    //     body: 'This is the first notification'
    // }, {
    //     title: 'Notification 2',
    //     body: 'This is the second notification'
    // }, {
    //     title: 'Notification 3',
    //     body: 'This is the third notification'
    // }]

    // const handleAddNotification = (title: string, body: string) => {
    //     notificationList.push({
    //         title,
    //         body
    //     })

    //     return notificationList;
    // }

    // export { notificationList, handleAddNotification };

    type Notifications = {
        id: number;
        title: string;
        body: string;
    }[]

    let notifications: Notifications;

    notificationList.subscribe((value) => {
        notifications = value;
    })

</script>
<div>
    {#each notifications as notification}
        <Notification id={notification.id} title={notification.title} body={notification.body} />
    {/each}
</div>