<template>
  <div class="main">
    <div class="container">
      <Header/>
      <Main/>
      <PostListPreview/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import PostList from "@/components/PostList";
import PostListPreview from "@/components/PostListPreview";

export default {
  components: {
    Header, Main, PostList, PostListPreview
  }
}
</script>

<style>

</style>
