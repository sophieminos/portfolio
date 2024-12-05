<template>
  <div id="app">
    <div id="app">
      <header :class="['header-title', currentClassListHeader]">
        <MenuComponent/>
        <div v-if="currentTitle === 'Home'">
          <div class="title-page hello-text">Hi there, I'm Sophie Minos</div>
          <div class="hero-container-description">
            <div><h1>Student in software engineering</h1></div>
            <div class="hero-image"></div>
            <div><h1>Full-Stack developer</h1></div>
          </div>
        </div>
        <div v-else>
          <h1>{{ currentTitle }}</h1>
          <p>{{ currentDescription }}</p>
        </div>
      </header>
      <router-view></router-view>
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: 'App',
  components: {
    MenuComponent,
  },
  setup() {
    const route = useRoute();

    // Access the meta properties dynamically
    const currentTitle = computed(() => route.meta.title || '');
    const currentDescription = computed(
      () => route.meta.description || ''
    );
    console.log(computed(() => route ))
    const currentClassListHeader = computed(() => {
      return route.meta.title === 'Home' 
        ? 'hero-section section-bg' 
        : '';
    });
    return { currentTitle, currentDescription, currentClassListHeader };
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,1..1000;1,1..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sofia+Sans+Condensed:ital,wght@0,1..1000;1,1..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jomhuria&display=swap');
body {
  font-family: "Inria Sans", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
</style>
