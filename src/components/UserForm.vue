<template>

  <form class="user__info info" v-on:submit="$event.preventDefault()">
    <div class="info__title">

      <h1 class="title-1 main">{{$t('user_form.main_info')}}</h1>
      <button class="info__edit" @click="handleClick">
        <img src="../img/edit.svg" alt="edit">
      </button>

    </div>

    <div class="info__inputs">
      <Input v-model="age.value" :title="$t('user_form.age')" :edit="edit" :type="'number'"/>
      <Input v-model="education.value" :title="$t('user_form.city')" :edit="edit"/>
      <Input v-model="city.value" :title="$t('user_form.education')" :edit="edit" />
    </div>

    <div class="info__about-me">
      <h2 class="title-2">{{$t('user_form.about_me')}}</h2>

      <span v-if="!this.edit">{{this.aboutMe}}</span>

      <textarea
          v-else
          name="about"
          id="about"
          cols="100"
          rows="10"
          v-bind:value="aboutMe"
          @input="this.aboutMe = $event.target.value"
      ></textarea>

    </div>

    <div class="info__tags" >
      <h2 class="title-2">{{$t('user_form.tags')}}</h2>

      <ul key="tag.id" class="info__tags-list info__tags-list--border-bottom">
        <Tag :tag="tag.value" v-for="tag in selectedTags"/>
      </ul>

      <ul key="tag.id" class="info__tags-list" >
        <Tag :tag="tag.value" v-on:click="() => selectTag(tag)" v-for="tag in tags"/>
      </ul>

    </div>

    <div class="info__links">
      <h2 class="title-2">{{$t('user_form.links')}}</h2>

      <ul>
        <Link v-bind:link="link.url" v-for="link in links" :key="link.id"/>
      </ul>

      <button
          @click="addLink"
      >
        Добавить еще
      </button>

    </div>
  </form>
</template>

<script>

export default {
  name: "UserForm",
  props : {
    links : {
      type: Array
    },
    tags: {
      type: Array
    }
  },

  data() {
    return {
      edit: true,

      age : {
        value: ""
      },
      city : {
        value: ""
      },
      education : {
        value: ""
      },
      aboutMe: "",
      selectedTags : new Set()
    }
  },

  methods : {
    handleClick(e) {
      e.preventDefault();

      this.edit = !this.edit;
    },

    selectTag(tag) {
      this.selectedTags.add(tag)
    },

    addLink() {
      if (this.links.length >= 5) return;

      this.$emit("update:links", [...this.links, {id: Date.now(), url: ""}]);
    },
    inputAge(value) {
      this.age = value;
    },

    inputCity(value) {
      this.city = value;
    },

    inputEducation(value) {
      this.education = value;
    }

  }
}
</script>

<style scoped>

.info__title {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.info__edit {
  height: 35px;
  width: 35px;
  margin-left: 20px;
  padding: 8px;
}

.info__edit:hover {
  border: 1px #FBFBFB dashed;
  border-radius: 10px;
}

.info__extra-info-1 > * + * {
  margin-top: 16px;
}

.info__input {
  display: flex;
}

.info__input h2 {
  margin-right: 30px;
}

.info__input input {
  border: 1px #FBFBFB solid;
}

.info__about-me {
  margin-top: 26px;
}

.info__about-me .title-2 {
  margin-bottom: 20px;
}

.info__about-me textarea {
  border: 1px white solid;
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;

  /*display: none;*/
}

.info__about-me span {
  line-break: anywhere;
  white-space: pre-line;
}

.info__tags {
  margin-top: 26px;
}

.info__tags .title-2 {
  margin-bottom: 18px;
}

.info__links {
  margin-top: 26px;
}

.info__links .title-2 {
  margin-bottom: 18px;
}

.info__links ul {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.info__tags-list {
  display: flex;
  flex-wrap: wrap;

  padding: 10px 0;
  margin-left: 10px;
  gap: 18px 10px;
}

.info__tags-list--border-bottom {
  border-bottom: 1px solid white;
}

/*.info__tags-list > * + * {*/
/*  margin-left: 10px;*/
/*}*/

@media (max-width: 991px) {
  .info__title {
    display: block;
    margin-bottom: 10px;
  }

  .info__edit {
    margin: 0;
  }

  .title-1 {
    font-size: 28px;
  }

  .title-2 {
    font-size: 22px;
  }
}

@media (max-width: 767px) {

  .info__edit {
    margin-left: 0;
    padding: 8px;
  }

  .info__links ul > * + * {
    margin-left: 18px;
  }

}
</style>