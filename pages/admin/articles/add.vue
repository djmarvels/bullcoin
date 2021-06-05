<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="articles">
          <div class="articles-header">
            <h3 class="articles-title">Add article</h3>
            <div class="articles-header--actions articles-header--actions-between">
              <el-button type="default" @click="returnToArticles">Return</el-button>
              <el-button type="primary" @click="addArticle">Add</el-button>
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
              <el-form-item label="Description">
                <el-input type="text" v-model="articleForm.description[articleForm.lang]" placeholder="Type description" />
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
import { mapActions } from 'vuex'

export default {
  name: "add",
  components: {
    Editor
  },
  data: () => ({
    articleForm: {
      title: {},
      description: {},
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
    locales() {
      return this.$i18n.locales;
    }
  },
  created() {
    this.lang = this.$i18n.defaultLocale;
    this.locales.forEach((locale) => {
      this.$set(this.articleForm.title, locale.code, '');
      this.$set(this.articleForm.description, locale.code, '');
      this.$set(this.articleForm.content, locale.code, '');
    });
  },
  methods: {
    ...mapActions({
      postArticle: 'blog/ADD_ARTICLE'
    }),
    returnToArticles() {
      this.$router.push(this.localePath('/admin/articles'));
    },
    addArticle() {
      let isTypedForm;

      isTypedForm = Object.keys(this.articleForm.title).filter((key) => (this.articleForm.title[key].length));
      isTypedForm = Object.keys(this.articleForm.description).filter((key) => (this.articleForm.description[key].length));
      isTypedForm = Object.keys(this.articleForm.content).filter((key) => (this.articleForm.content[key].length));

      if (isTypedForm.length) {
        this.postArticle(this.articleForm);
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
