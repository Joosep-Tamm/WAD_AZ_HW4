<template>
  <div>

    <AppHeader />
    <div class="ContentWrapper">
      <router-view />
    </div>    
    <AppFooter />

  
   
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';


export default {
  components: {
    AppHeader,
    AppFooter
  },
  name: "App",
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button{
  border-radius: 36px;
  background: rgb(8, 110, 110);
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
  color: whitesmoke
}
button:hover {
  background: rgb(4, 63, 63);
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
}

.ContentWrapper{
  min-height: 76vh;
  margin-bottom: 30px;
}

body {
  margin: 0;
}
</style>
