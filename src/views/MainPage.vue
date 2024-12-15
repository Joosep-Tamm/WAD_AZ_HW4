<template>
  <div class="AllPosts">
    <div id="post-list">
      <h1>All Posts</h1>
      <div class="container">
        <button @click="Logout" class="center">Logout</button>
      </div>
      <ul>
        <li class="item" v-for="post in posts" :key="post.id">
          <a class="singlepost" :href="'/apost/' + post.id">
            <div class="date-container">
              <span class="date"> {{ post.date }}</span><br />
            </div>
            <div class="body-container">
              <span class="body"> {{ post.body }}</span><br />
            </div>
          </a>
        </li>
      </ul>
      <div class="buttons-container">
        <button @click="navigateToAddPost">Add a Post</button>
        <button @click="deleteAllPosts">Delete all</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    navigateToAddPost() {
      this.$router.push("/addpost");
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deleteAllPosts() {
      fetch("http://localhost:3000/api/posts/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          this.fetchPosts();
          return response.json();
        })
        .catch((e) => {
          console.error("Error deleting posts:", e.message);
        });
    },
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
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

.item {
  background: rgb(189, 212, 199);
  margin-bottom: 5px;
  padding: 10px 15px;
  border-radius: 10px;
  width: 50%;
  margin: 10px auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

.item a {
  display: block;
  position: static;
  text-decoration: none;
  color: inherit;
}

.item:hover {
  background: rgb(173, 200, 185);
}

#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  max-width: 500px;
  margin: 30px auto;
  border-radius: 20px;
}

.buttons-container {
  display: flex;
  margin: auto;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 10px
}


#post-list ul {
  padding: 0;
  list-style-type: none;
}

.date-container {
  text-align: right;
}

.date {
  margin-right: 5px;
  font-size: 0.8em;
}

.body-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  word-wrap: break-word;
  white-space: pre-line;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 925px) {
  .buttons-container {
    flex-direction: column;
  }

  button {
    margin-top: 10px;
  }
}
</style>
