<script setup>
import {projects} from "@/constants";
</script>
<template>
  <div class="page">
    <section class="projects-section">
      <ul>
        <li v-for="project in projects.slice().reverse()" :key="project.id">
          <div class="thumbnail">
            <div class="tag">{{ project.tag }}</div>
            <img :src="require(`@/assets/${project.img}`)" alt="{{project.title}}"/>
          </div>
          <h3>{{ project.title }}</h3>
          <router-link :to="`/projects/${project.id}`">
            View Project
          </router-link>
          <!--<a href="/projects/{{ project.id }}" target="_blank">View Project</a>-->
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>