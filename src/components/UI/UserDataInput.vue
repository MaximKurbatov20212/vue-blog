<template>

  <div class="text-field">
    <label class="text-field__label" :for="label">{{label}}</label>

    <input
        class="text-field__input"
        :type="type"
        :id="label"
        v-mask="mask"
        name="my-input"
        title="my-input"
        :value="modelValue"
        @input="input($event)"
    />

    <div v-show="check()" class="text-field__error">
      <p>
        {{ $t('input_error') }}
      </p>
    </div>

  </div>

</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  name: "UserDataInput",
  directives: { mask },

  props : {
    modelValue: {
      type: String
    },
    label : {
      type: String,
      required: true
    },
    type : {
      type: String,
      default: "text"
    },
    mask : {
      type: Array,
      default: ['XXXXXXXXXXXXXXXX']
    }
  },
  data() {
    return {
      info : ""
    }

  },
  methods : {
    input(e) {
      this.$emit("update:modelValue", e)
    },
    check() {
      if (this.modelValue.length < 4) {
        return true;
      }

      if (!this.type.localeCompare('tel')) {

        if (this.$i18n.locale.localeCompare('ru')) {
          if (!this.modelValue.match("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$")) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
</script>

<style scoped>

/* text field */
.text-field {
  width: 100%;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 100%;

  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;

  color: white;
  background-clip: padding-box;

  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

.text-field__error {
  margin-top: 10px;
  color: rgba(246, 0, 0, 0.6);
}

</style>