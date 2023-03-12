<script lang="ts"> 
    import { removeNotification, removeNotificationById } from '../data/notificationList';

    export let id: number;
    export let title = 'Notification';
    export let body = 'This is the notification body!';
</script>

<div>
    <h2>{title}</h2>
    <p>{body}</p>
    <p>Id: {id}</p>
    <button on:click={() => removeNotificationById(id)}>Remove notification</button>   
</div>

<style>
    div {
        background-color: #f1f1f1;
        padding: 10px;
        margin: 10px;
    }
</style>