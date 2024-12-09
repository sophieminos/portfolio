<template>
  <div id="app">
    <BaseLayout>
    <!-- header -->
    <template #header >
      <div :class="['header-title', currentClassListHeader]">
      <MenuComponent />
      </div>
    </template>
    
    <!-- Contenu du slot par défaut -->
    <router-view></router-view>

    <!-- Contenu du slot "footer" -->
    <template #footer>
      <FooterComponent />
    </template>
  </BaseLayout>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue"; 
import BaseLayout from './layouts/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent,
    BaseLayout
  },
  setup() {
    const route = useRoute();

    // Détermination de la classe du header en fonction du titre
    const currentClassListHeader = computed(() => {
      return route.meta.title === 'Home' ? 'hero-section section-bg' : '';
    });

    return { currentClassListHeader };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed&family=Inria+Sans&family=Oooh+Baby&family=Jomhuria&display=swap');
body {
  font-family: "Inria Sans", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
</style>