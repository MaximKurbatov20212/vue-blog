<template>
  <div class="container">

    <div class="post-list">
      <PostSelector class="selector-wrapper"/>
        <transition-group name="flip-list" tag="div" class="ag-courses_box">
<!--          <div class="ag-courses_box">-->
            <PostPreview v-for="post in $store.getters.sortPosts" :key="post.id" :post="post"/>
<!--          </div>-->
      </transition-group>

    </div>
  </div>
</template>

<script>

import PostPreview from "@/components/UI/PostPreview";
export default {
  name: "PostListPreview",
  components: {PostPreview},

}
</script>
<style scoped>

.flip-list-move {
  transition: transform 1s;
}

.post-list .selector-wrapper{
  margin-bottom: 30px;
}

.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

</style>