
<template>
  <BaseLayout>
    <!-- header -->
    <template v-slot:header>
      <h1>{{ project.title }}</h1>
      <p style="color: rgba(199, 198, 189)">{{ project.txt_date }}</p>
      <a v-if="project.github_repo !== ''" target="_blank" :href="project.github_repo" class="button-github">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
        repository
      </a>
      <div class="description-project-detail-section">
        <p>{{ project.description }}</p>
      </div>
      <img class="thumbnail-project-detail" :src="require(`@/assets/${project.img}`)" alt="{{project.title}}"/>
    </template>

    <!-- main -->
    <div class="page">
      <section class="content-project-detail-section">
        
        <div v-if="project.skills.length > 0">
          <h2>Skills</h2>
          <ul class="skills-section-tech-list">
            <li v-for="(skill, index) in project.skills" :key="index">
              <img v-if="skill.img !== ''" :src="require(`@/assets/skills/${skill.img}`)" alt="{{skill.name}}"/>
              <div>{{ skill.name }}</div>
            </li>
          </ul>
        </div>
        <div v-if="project.features.length > 0">
          <h2>Features</h2>
          <table  class="bordered-portfolio-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in project.features" :key="index">
                <td><b>{{ feature.name }}</b></td>
                <td>{{ feature.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="video-project-detail" v-if="project.video !== ''">
          <h2>Video of presentation</h2>
          <div>
            <iframe
              :src="`${project.video}/preview`"
              width="640"
              height="400"
              allow="autoplay"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div v-if="project.gallery.length > 0">
          <h2>Gallery</h2>
          <div class="gallery">
            <div v-for="(image, index) in project.gallery" :key="index" class="gallery-item" :double-item="isLandscape(image)">
              <img :src="require(`@/assets/projects/${image.src}`)" :alt="image.legend" />
              <i>{{ image.legend }}</i>
            </div>
          </div>
        </div>
      </section>
      <section>
        <router-link to="/projects" class="button-item">Back to Projects</router-link>
      </section>
    </div>
  </BaseLayout>
</template>

<style scoped>
.video-project-detail iframe, img.thumbnail-project-detail {
  border-radius: 5px;
  box-shadow: rgba(199, 198, 189, 0.4) 0px 0px 0px 2px, rgba(199, 198, 189, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
img.thumbnail-project-detail {
  background-color: rgba(199, 198, 189);
  width: 300px;
  padding: 10px 15px;
}
.content-project-detail-section .skills-section-tech-list {
  justify-content: center;
}
.content-project-detail-section .skills-section-tech-list li {
  width: 10%;
}

p {
  text-align: center;
  margin: 10px auto 20px auto;
}
p, .bordered-portfolio-table, .gallery {
  max-width: 640px;
}
.bordered-portfolio-table, .gallery {
  margin: 0 auto 40px auto;
}



/* gallery */
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
}
.gallery-item {
  width: 30%;
  margin-bottom: 40px;
  cursor: pointer;
}
.gallery-item[double-item="true"] {
  width: calc(100%);
}
.gallery-item img {
  width: 100%;
  height: auto;
}

</style>

<script>
import {projects} from "@/constants";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { formatDate } from '@/utils/functions.js';

export default {
  components: {
    BaseLayout
  },
  props: ['id'],
  data() {
    return {
      project: null,
      projects: projects,
      imageDimensions: {}
    };
  },
  created() {
    this.project = this.projects.find(proj => proj.id === parseInt(this.id));
    this.project.txt_date = formatDate(this.project.date);
  },
  mounted() {
    this.loadImageDimensions();
  },
  methods: {
    loadImageDimensions() {
      this.project.gallery.forEach(image => {
        const img = new Image();
        img.src = require(`@/assets/projects/${image.src}`);
        img.onload = () => {
          this.imageDimensions[image.src] = { width: img.width, height: img.height };
        };
      });
    },
    isLandscape(image) {
      const dimensions = this.imageDimensions[image.src];
      return dimensions ? dimensions.width > dimensions.height : false;
    },
  }
};
</script>