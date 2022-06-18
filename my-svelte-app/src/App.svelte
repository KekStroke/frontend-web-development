<script lang="ts">
  import { io } from "socket.io-client";

  import Message from "./Message.svelte";
  import Input from "./Input.svelte";

  let messages: string[] = [];

  const socket = io("http://10.90.137.175/");
  socket.on("chat message", function (msg: string) {
    console.log("received", msg);
    messages.push(msg);
    messages = messages;
  });
</script>

<main>
  <ul>
    {#each messages as msg}
      <Message message={msg} />
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
