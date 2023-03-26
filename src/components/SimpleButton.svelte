<script lang="ts">
    export let handleClick = () => {
        console.log("Button clicked!");
    }

    export let text = "Simple button";
</script>

<button on:click={handleClick}>{text}</button>
