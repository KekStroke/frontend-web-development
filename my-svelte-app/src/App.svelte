<script lang="ts">
  import { io } from "socket.io-client";

  import Message from "./message.svelte";
  import type { Message as MessageType } from "./message";
  import Input from "./Input.svelte";

  let messages: MessageType[] = [];

  const socket = io("http://10.90.137.175/");
  socket.on("chat message", function (msg: MessageType) {
    console.log("received", msg);
    messages.push(msg);
    messages = messages;
  });
</script>

<main>
  <ul>
    {#each messages as { message, username }}
      <Message {message} {username} />
    {/each}
  </ul>

  <Input on:send={(e) => socket.emit("chat message", e.detail)} />
</main>

<style>
  ul {
    padding: 0;
    margin: 0;
  }
</style>
