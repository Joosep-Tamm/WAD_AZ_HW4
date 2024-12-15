<template>
  <div class="form">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" name="email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div v-if="errMsg" class="errorMessage">{{ errMsg }} </div>
    <div class="container">
      <button @click="SignUp" class="center">SignUp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      email: '',
      password: '',
      errMsg: '',
    }
  },
  watch: {  //Watches if password value changes
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
    validatePassword(value) {
      if (value.length < 8) {
        this.errMsg = "Password must be at least 8 characters.";
        return false
      } else if (value.length >= 16) {
        this.errMsg = "Password must be less than 16 characters.";
        return false
      } else if (!/[A-Z]/.test(value)) {
        this.errMsg = "Password must include at least one uppercase letter.";
        return false
      } else if (!/[0-9]/.test(value)) {
        this.errMsg = "Password must include at least one number.";
        return false
      }
      this.errMsg = ''; // Clear error message if all checks pass
      return true
    },
    SignUp() {

      if (!this.validatePassword(this.password)) return

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!emailRegex.test(this.email)) {
        // If email is not valid, show an alert or set an error message
        alert("Please enter a valid email address.");
        return;  // Prevent further execution
      }

      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
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
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
          alert("Error while signing up")
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

.errorMessage {
  padding: 10px;
}
</style>