<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <Card v-for="card in cards" :key="card.id" :card="card"/>
    </div>

<!--    <label for="file-content">-->
<!--      <input type="file" id="file-content" @input="handleInput">-->
<!--      <span>Добавить изображение</span>-->
<!--    </label>-->
  </div>
</template>

<script>
// import swiper from "@/swiper";

export default {
  name: "Swiper",
  components: {},

  data() {
    return {
      // swiper : swiper,
      cards: [
        {
          id: 1,
          url: require("@/img/1.jpg"),
        },
        {
          id: 2,
          url: require("@/img/2.jpg"),
        },
        {
          id: 3,
          url: require("@/img/3.jpg"),
        },
      ]
    }
  },

  mounted() {
     let swiper = new Swiper(".swiper", {
       dots: true,
      effect: "fade",
      direction: 'vertical',
      grabCursor: true,
      initialSlide: 3,
      rotate: true,
      mousewheel: {
        invert: false,
      },
      infinite: true,
    });
  },

  computed : {
    getCards() {
      // return this.cards.map(value => value.url = require(value.url) )
    }
  },

  methods : {
    // handleInput(e) {
    //   console.log(e.target.value)
    //   if (e.target.files.length === 0) return;
    //   this.cards.push({url: e.target.files[0].name})
    // }
  },

}
</script>

<style>

.swiper {
  width: 300px;
  height: 480px;
}

.swiper-wrapper {
  max-height: 100%;
}

@media (max-width: 767px) {
  .swiper {
    width: 200px;
    height: 320px;
  }
}

@media (max-width: 548px) {
  .swiper {
    width: 280px;
    height: 450px;
  }
}

</style>