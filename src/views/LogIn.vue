<template>
  <div class="form">
    <h3>LogIn</h3>
    <label for="email">Email</label>
    <input type="email" id="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" required v-model="password">
    <div class="container">
      <button @click="LogIn" class="center">LogIn</button>
      <button @click='this.$router.push("/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    LogIn() {
      let data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
}
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #6e8b97;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

h3 {
  text-align: center;
  color: whitesmoke;
}

label {
  color: whitesmoke;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%;
}

.container {
  display: flex;
  justify-content: center;
}
</style>