<script lang="ts">
    import Notifications from '../components/Notifications.svelte';
import {notify} from '../utils/sendNotification';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => notify("Title", "This is the message body!")}>Send notification</button>

<!-- <Notification/> -->
<Notifications/>
