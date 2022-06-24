<script lang="ts">
  import NavComponent from "./NavComponent.svelte";
</script>

<nav>
  <NavComponent text={"Home Page"} link={"/"} />
  <NavComponent text={"About me"} link={"about"} />
  <NavComponent text={"Projects"} link={"projects"} />
  <NavComponent text={"Contact me"} link={"contacts"} />
</nav>

<style>
  nav {
    display: flex;
    width: 60%;
    margin: 1.5em auto 1.5em;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
