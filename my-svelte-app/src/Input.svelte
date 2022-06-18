<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Message } from "./message";

  const disptach = createEventDispatcher<{ send: Message }>();

  let message: string;
  let username: string;

  function send() {
    if (!message || !username) return;
    disptach("send", { message, username });
    message = "";
  }
</script>

<form on:submit|preventDefault={send} action="">
  <input
    type="text"
    bind:value={username}
    placeholder="Name"
    style:flex-grow="1"
  />
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
    margin: 0 0 0.5em;
    padding: 0;
  }
  button {
    margin: 0;
    margin-left: 0.5em;
  }
</style>
