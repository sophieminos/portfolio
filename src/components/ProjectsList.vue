<template>
  <section class="projects-section">
    <h1 v-if="title == true">Recent projects</h1>
    <ul>
      <li v-for="project in sortedProjects" :key="project.id">
        <router-link :to="`/projects/${project.id}`">
          <div class="thumbnail">
            <!--<div class="tag tag-top" :class="project.tag==='school'?'tag-pink':'tag-green'">{{ project.tag }}</div>-->
            <img :src="require(`@/assets/${project.img}`)" alt="`${project.title}`" />
          </div>
          <h3>{{ project.title }}</h3>
        </router-link>
      </li>
    </ul>
    <router-link v-if="btnAllProjects == true" to="/projects" class="button-item">All Projects</router-link>
  </section>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { projects } from "@/constants";
import { parseProjectDate } from '@/utils/functions.js';

// Définir les props
const props = defineProps({
  projectCount: {
    type: Number,
    default: projects.length // Si non défini, afficher tous les projets
  },
  btnAllProjects: {
    type: Boolean,
    default: false
  },
  title: {
    type: Boolean,
    default: false
  }
});

// Trier les projets et limiter le nombre affiché
const sortedProjects = computed(() => {
  return projects.value
    .map(project => ({
      ...project,
      parsedDate: parseProjectDate(project.date)
    }))
    .sort((a, b) => a.parsedDate - b.parsedDate)
    .reverse()
    .slice(0, props.projectCount)
});
</script>

