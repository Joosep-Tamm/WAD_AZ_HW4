<template>
  <div class="post-card">
    <div class="post-header">
      <img :src="post.profile_picture" alt="Profile Picture" class="profile-pic" />
      <span class="post-date">{{ post.post_date }}</span>
    </div>
    <p class="post-body">{{ post.body }}</p>
    <img v-if="post.image" :src="post.image" :alt="post.image_alt" class="post-image" />
    <div class="post-footer">
      <button @click="likePost" class="like-button">👍</button>
      <span class="like-count">{{ post.likes }} Likes</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postId: Number
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
    post() {
      for (const p of this.posts) {
        if (p.id === this.postId) {
          return p;
        }
      }
      return null;
    }
  },
  methods: {
    likePost() {
      const postId = this.post.id;
      this.$store.dispatch('incrementLikes', { postId: postId });
    },
  },
};
</script>

<style scoped>
.post-card img {
  max-width: 95%;
  height: auto;
}

.post-card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgb(247, 245, 243);
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;

}

.post-card>*:not(.post-footer) {
  margin-left: 10px;
}

.post {
  background-color: rgb(150, 150, 150);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.post-date {
  margin-bottom: 10px;
  font-size: 0.9em;
  color: rgb(40, 40, 40);
}

.post img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}

.profile-pic {
  padding-top: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.like-button {
  margin-top: 5px;
  color: #007bff;
  cursor: pointer;
  font-size: 1.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  background-color: transparent;
}

.like-button:hover {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
