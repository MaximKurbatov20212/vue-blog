<template>
  <header class="header">
    <div class="container">
      <div class="header__row">

        <div class="header__links">
          <nav class="header__nav">
            <router-link class="header__logo" to="/hello">
              <img src="../img/logo.svg" alt="logo">
            </router-link>
          </nav>
          <LocaleSwitcher/>
        </div>

        <div class="header__search">
          <input
              class="header__input"
              type="text"
              id="search-user"
              placeholder="Поиск..."
              v-model="searchQuery"
          >
        </div>


        <button class="header__menu" @click="handleClick">
          <img class="header__menu-img" src="../img/open-menu.svg" alt="menu">
        </button>

      </div>

    </div>
  </header>
</template>

<script>
import closeBtn from '../img/close-menu.svg'
import openBtn from '../img/open-menu.svg'
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  components: {LocaleSwitcher},
  data() {
    return {
      searchQuery: ""
    }
  },

  methods : {
    handleClick() {
      const list = document.querySelector('.header__links');
      const toggler = document.querySelector('.header__menu-img');

      if (list.classList.toggle('open')) {
        toggler.src = closeBtn
      }
      else {
        toggler.src = openBtn
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/vars";

.header {
  padding-top: 54px;
}

.header__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__links {
  display: flex;
  align-items: flex-end;
  column-gap: 40px;
}

.header__input {
  border: 1px $main-color solid;
  border-radius: 40px;
  padding: 6px 22px;
  margin-left: 10px;
}

.header__profile-name {
  color: $main-color;
  text-decoration-line: underline;
  margin-left: 53px;
  cursor: pointer;
}

.header__menu {
  height: 40px;
  width: 40px;
  display: none;
}

.header__links.open {
  display: block;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: $main-bg;

  z-index: 1;
  padding: 46px 30px;

  .header__nav {
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    font-size: 34px;
    font-weight: 600;
  }
}

@media (max-width: 767px) {
  .header__input {
    font-size: 14px;
    padding: 4px 10px;
  }

  .header__profile-name {
    font-size: 30px;
  }
}

@media (max-width: 544px) {
  .header__links {
    display: none;
  }

  .header__menu {
    display: block;
    z-index: 2;
  }

  .header__profile-name {
    margin: 0;
  }
}
</style>