<script lang="ts">
  import Footer from "./Footer.svelte";
</script>

<div>
  <img class="profile-picture" src="/media/profile-picture.jpg" alt="Me" />
  <h1 class="name-heading">Iskhakov Anvar</h1>
  <h2>
    <img class="small-icon" src="media/graduated.png" alt="student icon" />
    University Student
  </h2>
  <h3>Personal Profile</h3>
  <p>
    I am 19 year old computer science undergraduate. Eager about programming and
    new technologies. Hard-working and responsible person with a pinch of
    leadership skills. Appreciate team working and experience exchange. strive
    to develop both hard and soft skills constantly. Benefit those around me.
  </p>
  <div class="clearfix" />
</div>

<div class="container">
  <section>
    <h3>Education Background</h3>
    <ul class="with-icons">
      <li>
        <img
          class="small-icon"
          src="media/graduated.png"
          alt="student icon"
        />Innopolis University, Russia<br />2021 - Present
        <ul>
          <li>
            <img
              class="small-icon"
              src="media/table-tennis.png"
              alt="table tennis icon"
            />Table Tennis club member
          </li>
          <li>
            <img
              class="small-icon"
              src="media/street-dance.png"
              alt="street dance icon"
            />Street Dance club member
          </li>
        </ul>
      </li>
      <li>
        <img
          class="small-icon"
          src="media/graduated.png"
          alt="student icon"
        />Nazarbayev Intellectual School, Kazakhstan<br />2016 - 2021
        <ul>
          <li>
            <img
              class="small-icon"
              src="media/hackathon.png"
              alt="programming competition icon"
            />Competitive Programming Olympiads
          </li>
          <li>
            <img
              class="small-icon"
              src="media/togetherness.png"
              alt="togetherness icon"
            />Active Student Community Member
          </li>
          <li>
            <img
              class="small-icon"
              src="media/hackathon.png"
              alt="programming competition icon"
            />Hackathons and Project Competitions Participant
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h3>Achievement</h3>
    <ul class="with-icons">
      <li>
        <img
          class="small-icon"
          src="media/gold.png"
          alt="gold medal icon"
        />Winner of the table tennis competition 2022
      </li>
      <li>
        <img
          class="small-icon"
          src="media/silver.png"
          alt="silver medal icon"
        />Republic Olympiad in Informatics 2017 - 2021
      </li>
      <li>
        <img
          class="small-icon"
          src="media/bronze.png"
          alt="bronze medal icon"
        />Central Asian Programming Olympiad 2020
      </li>
      <li>
        <img
          class="small-icon"
          src="media/quality.png"
          alt="participation icon"
        />"NASA Space Apps Challenge" hackathon 2020
      </li>
      <li>
        <img
          class="small-icon"
          src="media/quality.png"
          alt="participation icon"
        />STEM contests 2020
      </li>
    </ul>
  </section>

  <section>
    <h3>Skill and Interest</h3>
    <ul>
      <li>
        <label for="machine-learning">Machine Learning</label>
        <progress id="machine-learning" max="100" value="80"> 80% </progress>
        <span>80%</span>
      </li>
      <li>
        <label for="linear-algebra">Linear Algebra</label>
        <progress id="linear-algebra" max="100" value="83">83%</progress>
        <span>83%</span>
      </li>
      <li>
        <label for="problem-analysis-and-ciritical-thinking"
          >Problem Analysis and Critical Thinking</label
        >
        <progress
          id="problem-analysis-and-ciritical-thinking"
          max="100"
          value="90"
        >
          90%
        </progress>
        <span>90%</span>
      </li>
      <li>
        <label for="frontend">Frontend</label>
        <progress id="frontend" max="100" value="50">50%</progress>
        <span>50%</span>
      </li>
      <li>
        <label for="backend">Backend</label>
        <progress id="backend" max="100" value="35">35%</progress>
        <span>35%</span>
      </li>
    </ul>
  </section>
  <section>
    <h3>Language</h3>
    <ul>
      <li>
        <label for="english">English</label>
        <progress id="english" max="100" value="85">85%</progress>
        <span>85%</span>
      </li>
      <li>
        <label for="russian">Russian</label>
        <progress id="russian" max="100" value="92">92%</progress>
        <span>92%</span>
      </li>
      <li>
        <label for="kazakh">Kazakh</label>
        <progress id="kazakh" max="100" value="60">60%</progress>
        <span>60%</span>
      </li>
    </ul>
  </section>
</div>
<Footer />

<style>
  progress {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    width: 70%;
    height: 1em;
    background-color: whiteSmoke;
    border-radius: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  progress[value]::-webkit-progress-value {
    background-color: cornflowerblue;
    border-radius: 16px;
  }

  progress[value]::-webkit-progress-bar {
    background-color: whiteSmoke;
    border-radius: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  progress[value]::-moz-progress-bar {
    background-color: cornflowerblue;
    border-radius: 16px;
  }

  progress + span {
    position: relative;
    bottom: 0.5em;
    left: 0.5em;
  }
</style>
