<template>
  <div class="ag-courses_item">

    <router-link :to="{name : 'post', params: {id : post.id}}" class="ag-courses-item_link">

      <div class="ag-courses-item_bg"></div>

      <div class="ag-courses-item_title">
        {{post.title}}
      </div>

      <div class="ag-courses-item_date-box">
        <span class="ag-courses-item_date">{{$d(post.date, 'short')}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import PostMixin from "@/mixins/PostMixin";

export default {
  name: "PostPreview",
  // mixins : [PostMixin],

  props: {
    post : {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

.ag-courses_item {

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}

.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: rgba(0,9,17);

  overflow: hidden;

  position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}

.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}

.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}

.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}

.ag-courses-item_bg {
  height: 128px;
  width: 128px;

  background-color: #011d3f;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;
  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}


@media (max-width: 548px) {

  .ag-courses-item_title {
    font-size: 24px;
  }
}

</style>