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
                <div>
                  <a target="_blank" style="color: #ef476f; cursor: pointer; text-decoration: underline;" v-if="exp.url !== ''" :href="exp.url">
                    {{ exp.school }}
                  </a>
                  <span  style="color: #ef476f" v-if="exp.url === ''">
                    {{ exp.school }}
                  </span>
                  <img v-if="exp.logo !== ''" :src="require(`@/assets/${exp.logo}`)" :alt="exp.logo" style="height: 20px; margin-left: 10px;"/>
                </div>
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