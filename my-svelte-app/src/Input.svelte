<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const disptach = createEventDispatcher<{ send: string }>();

  let message: string;

  function send() {
    if (!message) return;
    disptach("send", message);
    message = "";
  }
</script>

<form on:submit|preventDefault={send} action="">
  <input type="text" bind:value={message} />
  <button>Send</button>
</form>

<style>
  form {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0.5em;
  }

  input {
    flex-grow: 1;
    margin: 0;
    padding: 0;
  }
  button {
    margin: 0;
    margin-left: 0.5em;
  }
</style>
