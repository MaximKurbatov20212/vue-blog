<template>
  <div class="container">
    <div class="post post--mg">

      <div class="post__header">
        <div class="post__header-row">
          <h2 class="post__main-title">{{post?.title}}</h2>
          <h3 class="post__title-1">{{$d(post.date, 'short')}}</h3>
        </div>
      </div>

      <div class="post__main">

        <div class="post__toogler">
          <RadioButton :alias="'Preview'" v-model:option="option" :name="post?.title" />
          <RadioButton :alias="'Write'"  v-model:option="option" :name="post?.title"/>
          <RadioButton :isNone="isNone" :name="post?.title" />
        </div>

        <textarea
            v-if="option === 'Write'"
            class="post__data"
            :value="post?.content"
            @input="handler"
            placeholder="Пишите в формате .md"
        >
        </textarea>

        <MarkDownField v-else :modelValue="post.content"/>

        <div class="post__footer">
          <div class="post__footer-row">
            <h3 class="post__title-1">Пожаловаться</h3>

            <div class="post__footer-like">
              <img class="post__footer-like-img" src="../img/like.svg" alt="like">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkDownField from "@/components/MarkDownField";
import Input from "@/components/UI/Input";
import RadioButton from "@/components/UI/RadioButton";
import PostMixin from "@/mixins/PostMixin";

export default {
  name: "Post",

  components : {
    RadioButton,
    Input,
    MarkDownField,
  },

  data() {
    return {
      isNone: true,
      option: "Write"
    }
  },

  computed: {
    post() {
      for (const p of this.$store.getters.sortPosts) {
        if (p.id === this.$route.params.id) {
          return p;
        }
      }
      return null
    }
  },

  // watch : {
  //   option(newValue) {
  //     console.log("Watch:" + newValue)
  //   }
  // },

  methods : {
    handleClick(e) {
      this.option = e.target.value === "Write" ? "Write" : "Preview";
    },
    handler(e) {
      this.$store.commit(
          'setPost',
          {id : this.$route.params.id, title: this.post.title, date: this.post.date, content : e.target.value}
      );
    }
  }
}
</script>

<style scoped>


.post {
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.10);
  padding: 30px 60px 50px 60px;

  margin-bottom: 100px;
}

.post--mg {
  margin: 50px 0;
}

.post__header {
  border-bottom: 1px solid white;
  padding: 0 30px 10px 0;
}

.post__header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.post__main-title {
  font-size: 40px;
  font-weight: 700;
}

.post__title-1 {
  font-size: 28px;
}

.post__footer {
  margin-top: 55px;
}

.post__footer-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.post__data {
  margin-top: 18px;
  border: 1px solid white;
  border-radius: 20px;
  padding: 20px;

  width: 100%;
  min-height: 400px;
  resize: vertical;
  font-size: 20px;
}

.post__data::-webkit-scrollbar {
  width: 10px;               /* ширина scrollbar */
}

.post__data::-webkit-scrollbar-thumb {
  background-color: white;    /* цвет плашки */
  border-radius: 50px;       /* закругления плашки */
}

.post__toogler {
  display: flex;
  margin-top: 20px;
}

@media (max-width: 548px) {
  .post {
    padding: 30px 20px 20px 20px;
    border-radius: 20px;
  }

  .post__main-title {
    font-size: 20px;
  }

  .post__title-1 {
    font-size: 16px;
  }

  .post__footer-like-img {
    height: 40px;
    width: 40px;
  }
}



</style>













