<script lang="ts">
  import { Link } from "svelte-navigator";

  export let text: string;
  export let link: string;
</script>

<Link class="nav-link" to={link}>{text}</Link>

<style>
  :global(a.nav-link) {
    text-decoration: none;
    display: inline-block;
    width: 100px;
    padding: 5px;
    text-align: center;
    border: 2px black solid;
    text-decoration: none;
  }

  :global(a.nav-link):link {
    color: black;
  }

  :global(a.nav-link):visited {
    color: black;
  }

  :global(a.nav-link.active),
  :global(a.nav-link):hover {
    border-color: rgb(207, 207, 207);
  }
</style>
