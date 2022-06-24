<script lang="ts">
  import Footer from "./Footer.svelte";

  // call function getDogAPI when page is loaded
  getDogAPI();

  // interface for API response
  interface dataI {
    url: string;
  }

  async function getDogAPI(): Promise<void> {
    // get response from API
    let data: dataI = await fetch("https://random.dog/woof.json").then(
      (response) => response.json()
    );

    let url: string = data.url;
    let element: HTMLVideoElement | HTMLImageElement;

    // check extension of returned url
    if (url.substring(url.length - 4) == ".mp4") {
      // if it is mp4, we need to create two components 'video' and 'source'
      element = document.createElement("video");
      element.autoplay = true;
      element.loop = true;
      element.muted = true;

      // video should have a source element inside to play
      let source: HTMLSourceElement = document.createElement("source");
      source.src = url;
      source.type = "video/mp4";

      // source is put into video tag
      element.appendChild(source);
    } else {
      // otherwise, API returned an image
      element = document.createElement("img");
      element.src = url;
    }

    element.style.width = "40%";
    // element with API is put into corresponding container
    document.getElementsByClassName("dog-image")[0].appendChild(element);
  }
</script>

<section>
  <h1 class="centered">My Projects</h1>
  <p class="centered">
    I do not have any big projects yet, but you still can visit my GitHut
    account.
  </p>
  <p class="centered">I will add them as soon as I build up some.</p>
  <p class="centered contacts">
    <a href="https://github.com/KekStroke"
      ><img class="small-icon" src="media//github.png" alt="github logo" />
      KekStroke</a
    >
  </p>
</section>

<div class="with-img">
  <p class="centered">In the meantime, you can take a look at some dogs</p>
  <div class="dog-image" />
</div>

<Footer />

<style>
  div.dog-image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .with-img {
    margin-top: 3em;
  }
</style>
