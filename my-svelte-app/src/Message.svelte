<script lang="ts">
  export let username: string;
  export let message: string;
</script>

<li>
  <span style="font-weight: bold;">{username}</span>
  {message}
</li>

<style>
  li {
    padding: 0.5rem 1rem;
  }

  li:nth-child(odd) {
    background-color: lightgray;
  }
</style>
