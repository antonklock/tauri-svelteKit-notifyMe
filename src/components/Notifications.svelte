<script lang="ts">
	import { notificationList } from '../data/notificationList';
    import Notification from './Notification.svelte';

    type Notification = {
        title: string;
        body: string;
    }

</script>
<div>
    {#each notificationList as notification}
        <Notification title={notification.title} body={notification.body} />
    {/each}
</div>