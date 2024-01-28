<template>
  <ul class="locale-switch">
    <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      {{ locale }}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'LocaleSwitcher',

  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        console.log(locale);
        this.$i18n.locale = locale;
      }
    }
  },

  data() {
    return {
      locales : process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/vars";

.locale-switch {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}

.right {
  justify-content: flex-end;
}

li {
  padding: 5px;
  text-decoration: none;
  color: $main-color;
  cursor: pointer;
  font-size: 20px;
  border: 1px solid $main-color;
  border-radius: 5px;
}
</style>