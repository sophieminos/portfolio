<script setup>

import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

</script>

<template>
  <div class="page">

    <header>
      <header class="header-title">
        <MenuComponent/>
        <h1>{{ project.title }}</h1>
        <div class="description-project-detail-section">
          <p>{{ project.description }}</p>
        </div>
        <img class="thumbnail-project-detail" :src="require(`@/assets/${project.img}`)" alt="{{project.title}}"/>
      </header>
    </header>

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
            <th>Feature</th>
            <th>Description</th>
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
        <iframe
            :src="`${project.video}/preview`"
            width="640"
            height="400"
            allow="autoplay"
            allowfullscreen>
        </iframe>
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
      <section>
      <FooterComponent/>
    </section>
  </div>
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
}

p, .bordered-portfolio-table, .gallery {
  max-width: 640px;
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

export default {
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