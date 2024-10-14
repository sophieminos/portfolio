<script setup>

</script>

<template>
  <nav role="navigation" class="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/skills">Skills</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="#contact-information">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* menu */
.menu {
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 10em;
  max-width: 70%;
}
.menu ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}
.menu ul li {
  display: block;
  padding: 15px;
}
.menu ul li a {
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
}
.menu ul li a:hover {
  color: #205E33;
}
</style>