<template>
  <div class="markdown markdown--mg">
    <Markdown :source="modelValue" />
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";

export default {
  name: "MarkDownField",

  components : {
    Markdown
  },

  props: {
    modelValue : {
      type: String
    }
  }
}

</script>

<style scoped>

.markdown {
  line-break: anywhere;
}

.markdown--mg {
  margin-top: 20px;
}

</style>