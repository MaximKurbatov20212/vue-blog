<template>

  <div class="input">
    <h2>{{title + ": "}} </h2>

    <span v-if="!edit">{{modelValue}}</span>

    <input
        v-else
        v-bind:value="modelValue"
        @input="changeValue"
        :type="type"
        title="user-info"
        :placeholder="$t('user_form.placeholder')"
    >

  </div>
</template>

<script>
export default {
  name: "Input",

  props : {
    modelValue : {
      type: String
    },

    title: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: "text"
    },

    edit : {
      type: Boolean
    }
  },

  methods : {
    changeValue(e) {
      this.$emit("update:modelValue", e.target.value)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../scss/vars";

.input {
  display: flex;
  align-items: center;

  h2 {
    margin-right: 10px;
  }

  span {
    font-size: 20px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input {
    font-size: 20px;

    &::placeholder {
      color: #FBFBFB54;
    }
  }

}

@media (max-width: 991px) {
  .input {
    display: block;
  }
}


</style>