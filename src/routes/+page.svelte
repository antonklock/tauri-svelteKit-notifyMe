<script lang="ts">
    import Notifications from '../components/Notifications.svelte';
    import {notify} from '../utils/sendNotification';
    import {addNotification, getNotificationListLength, logNotificationList, notificationList, removeNotification} from '../data/notificationList';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- <button on:click={() => notify("Title", "This is the message body!")}>Send notification</button>    -->
<button on:click={() => addNotification("Title", "This is the message body!")}>Add notification</button>   
<button on:click={() => removeNotification(getNotificationListLength())}>Remove last notification</button>   
<button on:click={() => logNotificationList()}>Log notificationList</button>   

<!-- <Notification/> -->
<Notifications/>
