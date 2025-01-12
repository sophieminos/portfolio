<script setup>
import ProjectList from '@/components/ProjectsList.vue';
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
      <ProjectList/>
    </div>
  </BaseLayout>
</template>