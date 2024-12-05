<template>
  <div class="page">
    <section class="projects-section">
    <h1>recent projects</h1>
      <ul>
        <li v-for="project in projects.slice().reverse().slice(0, 3)" :key="project.id">
          <div class="thumbnail">
            <div class="tag">{{ project.tag }}</div>
            <img :src="require(`@/assets/${project.img}`)" alt="{{project.title}}"/>
          </div>
          <h3>{{ project.title }}</h3>
          <router-link :to="`/projects/${project.id}`">
            View Project
          </router-link>
        </li>
      </ul>
      <router-link to="/projects" class="button-item">All Projects</router-link>
    </section>
    <section style="display: none" class="experiences-skills-section">
      <h1>experiences & skills</h1>
      <table class="portfolio-table">
        <tr v-for="exp in experience" :key="exp.id">
          <td>{{ exp.date }}</td>
          <td>{{ exp.title }}</td>
        </tr>
      </table>
    </section>
    <section class="apprenticeship-section section-bg">
      <div class="apprenticeship-description">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis imperdiet nibh vitae viverra. </div>
        <div><img src="" alt=""></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis imperdiet nibh vitae viverra. </div>
        <div><img src="" alt=""></div>
      </div>
      <h1>Apprenticeship</h1>
      <div class="apprenticeship-description">
        <div><img src="" alt=""></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis imperdiet nibh vitae viverra. </div>
        <div><img src="" alt=""></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis imperdiet nibh vitae viverra. </div>
      </div>
    </section>
    <section class="testimonial-section">
      <h1>What people say about me</h1>
      <table class="testimonial-items">
        <tr>
          <td class="testimonial-item">
            <cite>Sophie demonstrates professionalism and rigor; she integrates perfectly within the team and brings relevant and effective ideas. She is a major asset to the company.</cite>
            <div class="testimonial-item-author">
              <div class="testimonial-item-author-name"><a href="https://fr.linkedin.com/in/pascal-vigant" target="_blank">Pascal VIGANT</a></div>
              <!--<div class="testimonial-item-author-description"><a href="http://www.wizin.fr" target="_blank">Wizin</a>&nbsp;CTO</div>-->
              <br>
              <span style="font-weight: lighter; font-size: small; font-style: italic;">(translated from the original)</span>
            </div>
          </td>
          <!--<td class="testimonial-item">
            <cite>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis imperdiet nibh vitae viverra. Etiam leo ligula, mattis sit amet pretium accumsan, pretium eget ex. Suspendisse euismod nibh non magna sodales, sit amet posuere enim vulputate. Mauris id tincidunt dolor. Vestibulum ac vestibulum libero. Sed vitae velit eget nulla ultrices ultricies.</cite>
            <div class="testimonial-item-author">
              <div class="testimonial-item-author-name">author</div>
              <div class="testimonial-item-author-description">description</div>
            </div>
          </td>-->
        </tr>
      </table>
    </section>
    <!--<button style="display: none" @click="handleButtonClick">Learn More</button>-->
  </div>
</template>

<script setup>

import { ref } from 'vue';
import {projects} from "@/constants";

const experience = ref([
  { id: 1, date: '2022-now', title: 'Experience 1' },
  { id: 2, date: '2021-2022', title: 'Experience 2' }
]);

// Méthode pour le bouton "Learn More"
/*const handleButtonClick = () => {
  alert('More content coming soon!');
};*/
</script>

<style scoped>




/* apprenticeship section */
.apprenticeship-section {
  padding: 20px;
}
.apprenticeship-section .apprenticeship-description {
  display: flex;
  align-items: center;
}
.apprenticeship-section .apprenticeship-description img {
  width: 100%;
  min-width: 100%;
  min-height: 100px;
  border: 1px solid #fff !important;
}
.apprenticeship-section .apprenticeship-description div {
  width: 25%;
  min-height: 200px;
  align-content: center;
  text-align: justify;
  padding: 10px;
}

/* testimonial section */
.testimonial-item {
  padding: 20px 40px;
  width: 50%;
}
.testimonial-item:first-child {
  border-right: 1px solid #205E33;
}
.testimonial-item cite {
  text-align: justify;
  display: block;
  position: relative;
  margin: 20px 0;
}
.testimonial-item cite:before, .testimonial-item cite:after {
  content: "‟";
  font-family: "Jomhuria", serif;
  position: absolute;
  font-size: 2em;
}
.testimonial-item cite:before {
  transform: scaleY(-1);
  top: -30px;
  left: -20px;
}
.testimonial-item cite:after {
  transform: scaleX(-1);
  right: -20px;
}
.testimonial-section .testimonial-item-author-name {
  font-weight: bold;
}
.testimonial-item-author {
  text-align: left;
}

</style>
