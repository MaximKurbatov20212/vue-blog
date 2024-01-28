<template>
  <div class="radio" :class="{'max-width disabled' : isNone}">
    <label class="radio__label">
      <input
          class="radio__input"
          :name="name"
          type="radio"
          @click="handleClick"
          :value="alias"
      >
      <span class="radio__text">{{alias}}</span>
    </label>
  </div>

</template>

<script>

export default {
  name: "RadioButton",
  props : {
    alias: {
      type: String
    },
    isNone : {
      type: Boolean
    },
    option : {
      type: String,
    },
    name : {
      type: String,
      required: true
    }
  },

  methods : {
    handleClick() {
      // console.log(this.alias)
      this.$emit("update:option", this.alias)
    }
  }
}

</script>

<style scoped>

.radio__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label связанного с .custom-radio */
.radio__text {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* стили для радиокнопки, находящейся в фокусе */
.radio__input:focus + .radio__text {
  border: 1px solid white;
  border-bottom: none;
}

/* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
.radio__input:not(:checked) + .radio__text {
  border-bottom: 1px solid white;
}

/* стили для радиокнопки, находящейся в состоянии checked */
.radio__input:checked + .radio__text {
  border: 1px solid white;
  border-radius: 4px 4px 0 0 ;
  border-bottom: none;
}

.radio__text {
  padding: 10px;
}

.max-width {
  width: 100%;
}

.disabled {
  border-bottom: 1px solid white;
}

.radio.disabled .radio__label span {
  border: none;
}
</style>