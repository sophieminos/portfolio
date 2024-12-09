<script setup>
import {projects} from "@/constants";
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>
<template>
  <BaseLayout>
    <!-- header -->
    <template #header>
      <div>
        <h1>Projects</h1>
        <p>Here are some of my interesting projects:</p>
      </div>
    </template>

    <!-- main -->
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
  </BaseLayout>
</template>