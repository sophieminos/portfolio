<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import {projects} from "@/constants";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="page">

    <header>
      <header class="header-title">
        <MenuComponent/>
        <h1>projects</h1>
        <p>Here are some of my interesting projects:</p>
      </header>
    </header>

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

    <FooterComponent/>
  </div>

</template>

<style scoped>

</style>