<template>
  <header class="app-header">
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/signup" class="nav-link">Sign Up</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
