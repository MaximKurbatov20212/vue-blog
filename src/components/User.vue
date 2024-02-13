<template>
  <div class="container">
    <section class="main__user user">

      <div class="user__main-info">

        <div class="user__images">
          <Swiper />
        </div>

        <div class="user__main-info-footer">
          <h2 class="user__name">{{name}}</h2>
          <h3 class="title-3">Java developmer</h3>
          <h3 class="title-3">{{ $tc('followers', 2022) }}</h3>
        </div>
      </div>

      <UserForm v-model:links="links" v-bind:tags="tags" />
    </section>

  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import UserForm from "@/components/UserForm";
import {mapState} from "vuex";

export default {
  name: "User",
  components : {
    Swiper, UserForm
  },
  computed: {
    ...mapState({
      name: state => state.user.name
    })
  },

  data() {
    return {
      tags: [
        {id: 1, value: "Бокс"},
        {id: 2, value: "Фехтование"},
        {id: 3, value: "Еще что-то"}
      ],
      links: [
        {id: 1, url: "" },
        {id: 2, url: "" },
        {id: 3, url: "" }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.user {
  display: flex;
  column-gap: 90px;
  padding-bottom: 50px;
  border-bottom: 1px $main-color solid;
}

.main__user {
  margin: 71px 0;
}

.user__images {
  position: relative;
  padding: 0 30px;
}

.user__main-info {
  text-align: center;
}

.user__main-info-footer {
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,9,17,1) 0%, rgba(0,9,17,0) 100%);
  padding: 65px 0;

  * + * {
    margin-top: 10px;
  }
}

.user__name {
  font-family: $font-account-name;
  font-size: 40px;
}

@media (max-width: 991px) {
  .user {
    column-gap: 40px;
  }

}

@media (max-width: 767px) {
  .user {
    margin-top: 20px;
    column-gap: 10px;
  }

  .user__name {
    font-size: 32px;
  }

  .user__main-info-footer {
    padding: 40px 0;
  }

  .user__images {
    padding: 0 10px;
  }
}

@media (max-width: 544px) {
  .user {
    flex-direction: column;
    margin: 71px 0;
    padding-bottom: 30px;
  }

  .user__main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user__main-info-footer {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}

</style>