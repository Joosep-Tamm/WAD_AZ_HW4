<template>
  <div class="main-page">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <UserPost :postId="post.id"/>
    </div>
    <div class = "reset-button-wrapper">
      <button @click="resetLikes" class="reset-button">Reset All Likes</button>
    </div>
  </div>
</template>

<script>
import UserPost from '@/components/UserPost.vue';

export default {
  components: {
    UserPost
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    resetLikes() {
      this.$store.dispatch('resetLikes'); // Dispatch action to reset all likes
    }
  },
};
</script>

<style>




.reset-button-wrapper {
    display: flex;
    justify-content: center; 
    margin-top: 20px; 
    margin-bottom: 20px;
  }
  .reset-button {
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 30px;
    background-color: rgb(124, 124, 254);
  }

  .reset-button:hover {
    background-color: rgb(112, 112, 231);
    color: white;
  }

  .main-page {
    margin-top: 20px;
    overflow: hidden;              
  }
  
  
</style>

