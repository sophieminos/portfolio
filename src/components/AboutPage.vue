<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue';
import {studies, experiences} from "@/constants";
</script>

<template>
  <BaseLayout>
    <!-- header -->
    <template #header>
    </template>

    <!-- main -->
    <div class="page">
      <section class="studies-section">
        <h1>Studies</h1>
        <table class="portfolio-table">
          <tbody>
            <tr v-for="exp in studies" :key="exp.id">
              <td><b>{{ exp.date }}</b></td>
              <td>
                <h3>{{ exp.title }}</h3>
                <span style="color: #ef476f">{{ exp.school }}</span>
                <p>{{ exp.description }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="studies-section">
        <h1>Work experience</h1>
        <table class="portfolio-table">
          <tbody>
            <tr v-for="exp in experiences" :key="exp.id">
              <td><b>{{ exp.date }}</b></td>
              <td>
                <h3>{{ exp.title }}</h3>
                <span style="color: #ef476f">{{ exp.company }}</span>
                <p>{{ exp.description }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </BaseLayout>
</template>

<style scoped>
</style>