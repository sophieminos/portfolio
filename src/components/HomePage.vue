<template>
  <BaseLayout>
    <!-- header -->
    <template #header>
      <div class="hero-section section-bg">
        <div class="title-page hello-text">Hi there, I'm Sophie Minos</div>
        <div class="hero-container-description">
          <div><h1>Software <span style="color:#ef476f">Engineer</span></h1></div>
          <div class="hero-image"></div>
          <div><h1><span style="color:#ef476f">Full-Stack</span> Developer</h1></div>
        </div>
      </div>
    </template>

    <!-- main -->
    <div class="page">
      
      <ProjectList :projectCount="5" :btnAllProjects="true" :title="true"/>
      
      <section style="display: none" class="experiences-skills-section">
        <h1>experiences & skills</h1>
        <table class="portfolio-table">
          <tbody>
            <tr v-for="exp in experience" :key="exp.id">
              <td>{{ exp.date }}</td>
              <td>{{ exp.title }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="apprenticeship-section section-bg">
        <div class="apprenticeship-description">
          <div data-type="description-para">
            I developed <b>decision-making</b> skills by regularly choosing the most effective solutions for issues or improvements in the workplace. 
          </div>
          <div data-type="description-svg-text">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="firstPath" d="M10,60 C10,60 120,100 190,60" fill="none" />
              </defs>
              <text font-size="35" font-family="'Sofia Sans Condensed', sans-serif" fill="#ef476f" text-transform="uppercase">
                <textPath href="#firstPath">
                  Decision making
                </textPath>
              </text>
            </svg>
          </div>
          <div data-type="description-para">
            I <b>identified issues</b> in workflows by debugging step by step and that improved efficiency.
          </div>
          <div data-type="description-svg-text">
            <svg data-type="description-svg-text" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="secondPath" d="M10,80 C10,80 100,20 190,80" fill="none" />
              </defs>
              <text font-size="35" font-family="'Sofia Sans Condensed', sans-serif" fill="#cc8f02" text-transform="uppercase">
                <textPath href="#secondPath">
                  Problem solving
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <h1 style="margin: 10px 0">Apprenticeship</h1>
        <div class="apprenticeship-description">
          <div data-type="description-svg-text">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="thirdPath" d="M10,80 C10,80 100,20 190,80" fill="none" />
              </defs>
              <text font-size="35" font-family="'Sofia Sans Condensed', sans-serif" fill="#118ab2" text-transform="uppercase">
                <textPath href="#thirdPath">
                  Active listening
                </textPath>
              </text>
            </svg>
          </div>
          <div data-type="description-para">
            I actively <b>listened to my manager</b>, asking relevant questions, and ensuring that I clearly understood instructions, which helped me avoiding misunderstandings in the project.
          </div>
          <div data-type="description-svg-text">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="firstPath" d="M10,60 C10,60 120,100 190,60" fill="none" />
              </defs>
              <text font-size="35" font-family="'Sofia Sans Condensed', sans-serif" fill="#1cb88f" text-transform="uppercase">
                <textPath href="#firstPath">
                  Technical Skills
                </textPath>
              </text>
            </svg>
          </div>
          <div data-type="description-para">
            I gained <b>practical technical skills</b> in programmation, allowing me to contribute directly to projects with my gained expertise and be a major actor within a team.
          </div>
        </div>
      </section>
      <section class="testimonial-section">
        <h1>What people say about me</h1>
        <table class="testimonial-items">
          <tbody>
            <tr>
              <td class="testimonial-item">
                <cite>Sophie demonstrates professionalism and rigor; she integrates perfectly within the team and brings relevant and effective ideas. She is a major asset to the company.</cite>
                <div class="testimonial-item-author">
                  <div class="testimonial-item-author-name"><a href="https://fr.linkedin.com/in/pascal-vigant" target="_blank">Pascal VIGANT</a></div>
                  <div class="testimonial-item-author-description">
                    <a href="https://www.linkedin.com/company/wizin-partners/" target="_blank">
                      Wizin
                    </a>
                    CTO</div>
                  <br>
                  <span style="font-weight: lighter; font-size: small; font-style: italic;">(translated from the original)</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <!--<button style="display: none" @click="handleButtonClick">Learn More</button>-->
    </div>
  </BaseLayout>
</template>

<script setup>

import { ref } from 'vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import ProjectList from '@/components/ProjectsList.vue';

const experience = ref([
  { id: 1, date: '2022-now', title: 'Experience 1' },
  { id: 2, date: '2021-2022', title: 'Experience 2' }
]);

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
  width: 35%;
  align-content: center;
  text-align: center;
  padding: 10px;
}
.apprenticeship-section .apprenticeship-description div[data-type="description-svg-text"] {
  width: 15%;
}
.apprenticeship-section .apprenticeship-description div[data-type="description-para"] {
  width: 35%;
}
/* testimonial section */
.testimonial-items {
  width: 50%;
  margin: 0 auto;
}
.testimonial-item {
  padding: 20px 40px;
}
.testimonial-item:first-child {
  border-right: 2px solid #205E33;
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
  color: #205E33;
  font-weight: bold;
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
