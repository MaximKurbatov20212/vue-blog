<template>
  <div class="swiper-slide">
    <img :src="card.url" alt="card">
  </div>
</template>

<script>
export default {
  name: "Card",

  props : {
    card: {
      type: Object
    }
  }
}
</script>

<style scoped>

.swiper-slide {
  position: relative;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.swiper-slide img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

</style>