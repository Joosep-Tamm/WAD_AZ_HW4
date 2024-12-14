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
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
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
  min-height: 70px;
  margin: 10px auto;
  position: relative; 
}

.item a {
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; 
}

.item:hover {
  background: rgb(173, 200, 185); 
}

#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
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
}

.body-container {
  text-align: center;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
