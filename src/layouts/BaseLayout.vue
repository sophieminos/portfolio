<template>
<div class="container">
    <header id="top">
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
</template>

<script>
export default {
    name: "BaseLayout",
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header, footer {
    text-align: center;
}

main {
    flex: 1;
}
</style>
  