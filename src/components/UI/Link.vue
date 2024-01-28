<template>
  <li class="link"><a href="#!"></a></li>
</template>

<script>
export default {
  name: "Link",

  props : {
    link: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.link {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px dashed #FBFBFB;
}


@media (max-width: 767px) {
  .link {
    width: 60px;
    height: 60px;
  }
}

</style>