<template>

  <div class="post__list">
    <Post v-for="post in $store.getters.sortPosts" v-bind:p="post"/>
  </div>

</template>

<script>

import PostSelector from "@/components/UI/PostSelector";
import Post from "@/components/Post"

export default {
  name: "PostList",
  components: {PostSelector, Post},
}

</script>

<style scoped>

</style>