<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import AboutPage from "./AboutPage.svelte";
  import ContactsPage from "./ContactsPage.svelte";
  import HomePage from "./HomePage.svelte";
  import Navbar from "./Navbar.svelte";
  import ProjectsPage from "./ProjectsPage.svelte";
</script>

<Router>
  <Navbar />
  <main>
    <Route path="/">
      <HomePage />
    </Route>

    <Route path="about">
      <AboutPage />
    </Route>

    <Route path="contacts">
      <ContactsPage />
    </Route>

    <Route path="projects">
      <ProjectsPage />
    </Route>
  </main>
</Router>
