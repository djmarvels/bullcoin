<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="articles">
          <div class="articles-header">
            <h3 class="articles-title">Edit article #{{ articleID }}</h3>
            <div class="articles-header--actions articles-header--actions-between">
              <el-button type="default" @click="returnToArticles">Return</el-button>
              <el-button type="success" @click="saveArticle">Save</el-button>
            </div>
          </div>
          <div class="articles-form">
            <el-form>
              <el-form-item label="Language">
                <el-select v-model="articleForm.lang" placeholder="Select">
                  <el-option
                    v-for="locale in locales"
                    :key="locale.code"
                    :label="locale.code"
                    :value="locale.code">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Title">
                <el-input type="text" v-model="articleForm.title[articleForm.lang]" placeholder="Type title" />
              </el-form-item>
              <el-form-item>
                <div class="w-100">
                  <Editor ref="tinymce" api-key="lbwbw0j62bbd25kd0rukrtnao7hchkjkzlimni8xmchkfv70" :init="tinymce_options" v-model="articleForm.content[articleForm.lang]" />
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import Vue from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: "id",
  components: {
    Editor
  },
  data: () => ({
    articleForm: {
      title: {},
      content: {},
      lang: 'en'
    },
    tinymce_options: {
      height: 350,
      menubar: false,
      language: 'en',
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar:
        'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    },
  }),
  computed: {
    ...mapGetters({
      article: 'blog/article'
    }),
    locales() {
      return this.$i18n.locales;
    },
    articleID() {
      return this.$route.params.id;
    },
  },
  created() {
    this.lang = this.$i18n.defaultLocale;
    this.locales.forEach((locale) => {
      this.$set(this.articleForm.title, locale.code, '');
      this.$set(this.articleForm.content, locale.code, '');
    });
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getArticle(this.$route.params.id);
      if (this.article) {
        const article = JSON.parse(JSON.stringify(this.article));
        this.articleForm.title = article.title;
        this.articleForm.content = article.content;
      }
    });
  },
  beforeDestroy() {
    this.clearArticle();
  },
  methods: {
    ...mapActions({
      putArticle: 'blog/SAVE_ARTICLE',
      getArticle: 'blog/GET_ARTICLE'
    }),
    ...mapMutations({
      clearArticle: 'blog/CLEAR_ARTICLE',
    }),
    returnToArticles() {
      this.$router.push(this.localePath('/admin/articles'));
    },
    saveArticle() {
      let isTypedForm;

      isTypedForm = Object.keys(this.articleForm.title).filter((key) => (this.articleForm.title[key].length));
      isTypedForm = Object.keys(this.articleForm.content).filter((key) => (this.articleForm.content[key].length));

      if (isTypedForm.length) {
        this.putArticle({
          title: this.articleForm.title,
          content: this.articleForm.content,
          id: this.articleID
        });
      } else {
        this.$notify.error({ title: 'Error', message: 'Please type form' });
      }
    }
  }
}
</script>

<style scoped lang="scss">
.articles {
  min-height: calc(100vh - 200px);
  &-header {
    margin-top: 60px;
    &--actions {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      &-between {
        justify-content: space-between;
      }
    }
  }
  &-title {
    text-align: center;
  }
  &-form {
    margin-top: 60px;
    &--flex {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>
