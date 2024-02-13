<template>
  <div class="post-view">
    <div class="container">
      <LocaleSwitcher v-bind:modifier="'right'"/>
      <Post />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post"

export default {
  name: "PostPage",
  components : {
    Post
  }
}

</script>

<style scoped>

.post-view {
  margin-top: 20px;
}

</style>