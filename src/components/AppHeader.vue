<template>
  <nav>
      <router-link to="/mainpage">Posts</router-link> |
      <router-link to="/signup">SignUp</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/contactus">ContactUs</router-link>
    </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>