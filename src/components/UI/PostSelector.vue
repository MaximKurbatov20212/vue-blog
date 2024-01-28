<template>

  <div class="selector-wrapper selector--right">
    <label for="post-selector">{{$t('sort')}}</label>
    <select id="post-selector" name="selector" class="selector" @change="$store.commit('setSelectedSort', $event.target.value)">
      <option
          v-for="option in $store.state.sortOptions"
          :key="option.value"
          :value="option.value"
      >
        {{option.option}}
      </option>
    </select>
  </div>

</template>

<script>
export default {
  name: "PostSelector",
  
  data() {
    return {

    }
  }
  ,
  // methods : {
  //   handle(event) {
  //     console.log(event.target.value);
  //   }
  // }
}

</script>

<style scoped>

.selector-wrapper {
  font-size: 20px;
}

.selector {
  background-color: #030E1A;
}

.selector--right {
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
}


@media (max-width: 548px) {
  .selector-wrapper {
    font-size: 14px;
  }
}

</style>