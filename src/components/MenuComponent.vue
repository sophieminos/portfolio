<template>
  <nav role="navigation" class="menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/skills">Skills</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
  <div class="menu-hamburger" ref="menuHamburger" :aria-expanded="false">
  <svg id="btn-menu-open" @click="handleClickMenuOpen" width="40px" height="40px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <g id="color"/>
    <g id="hair"/>
    <g id="skin"/>
    <g id="skin-shadow"/>
    <g id="line">
      <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </g>
  </svg>
  <nav role="navigation" >
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/skills">Skills</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li ref="btnMenuClose" id="btn-menu-close" @click="handleClickMenuClose">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </li>
    </ul>
  </nav>
</div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: false, // Indique si l'utilisateur est sur mobile
    };
  },
  mounted() {
    this.updateMediaQuery(); // Vérifie la taille d'écran au chargement
    window.addEventListener("resize", this.updateMediaQuery);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateMediaQuery);
  },
  methods: {
    updateMediaQuery() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
      console.log("=>", this.isMobile);
    },
    handleClickMenuOpen() {
      if(this.isMobile && this.$refs.menuHamburger.getAttribute("aria-expanded") == "false"){
        this.$refs.menuHamburger.setAttribute("aria-expanded", "true");
      }
    },
    handleClickMenuClose() {
      if(this.isMobile && this.$refs.menuHamburger.getAttribute("aria-expanded") == "true"){
        this.$refs.menuHamburger.setAttribute("aria-expanded", "false"); 
      }
    },
  }
};
</script>
<style scoped>
/* menu */
.menu ul, .menu-hamburger ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}
.menu ul li, .menu-hamburger ul li {
  display: block;
  padding: 15px;
}
.menu ul li a, .menu-hamburger ul li a {
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
}
.menu ul li a:hover, .menu-hamburger ul li a:hover {
  color: #205E33;
}

.menu {
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 10em;
  max-width: 70%;
}

.menu-hamburger {
  max-width: 100%;
}
.menu-hamburger ul {
  flex-direction: column;
}
#btn-menu-close, #btn-menu-open {
  cursor: pointer;
}

.menu-hamburger[aria-expanded="false"] #btn-menu-open {
  display: block;
}
.menu-hamburger[aria-expanded="true"] #btn-menu-open {
  visibility: hidden;
}
.header-title .menu-hamburger, .header-title .menu-hamburger[aria-expanded="true"] nav {
  border-radius: 0.4em;
}
.header-title.section-bg .menu-hamburger, .header-title.section-bg .menu-hamburger[aria-expanded="true"] nav {
  background-color: #fffffF;
}
.header-title:not(.section-bg) .menu-hamburger, .header-title:not(.section-bg) .menu-hamburger[aria-expanded="true"] nav {
  background-color: #E2E1D8;
}
.section-bg .menu-hamburger[aria-expanded="true"] nav {
  display: block;
  width: 100%;
}
.menu-hamburger[aria-expanded="false"] nav {
  display: none;
}

@media only screen and (max-width: 480px) {
  .menu-hamburger {
    display: block;
  } 
  .menu {
    display: none;
  }
}
@media only screen and (min-width: 480px) {
  .menu {
    display: block;
  }
  .menu-hamburger {
    display: none;
  }
  #btn-menu-open {
    display: none;
  }
}
@media only screen and (min-width: 480px) and (max-width: 991px) {
  .menu {
    max-width: 90%;
  }
}
</style>