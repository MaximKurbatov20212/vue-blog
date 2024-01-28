<template>
  <li class="tag"><a href="#!">{{tag}}</a></li>
</template>

<script>
export default {
  name: "Tag",

  props : {
    tag : {
      type: String
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../scss/vars";


.tag {
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #FFF;
  padding: 11px 16px;

  &:hover {
    background-color: white;
    a {
      color: black;
    }
  }

  a {
    color: $main-color;
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .tag {
    padding: 6px 10px;
    a {
      font-size: 14px;
    }
  }
}
</style>