<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="articles">
          <div class="articles-header">
            <h3 class="articles-title">Articles</h3>
            <div class="articles-header--actions">
              <el-button type="success" @click="addArticle">Add article</el-button>
            </div>
          </div>
          <div class="articles-list mt-4">
            <div class="card text-dark articles-list-row mb-4 p-4 d-flex justify-content-between align-items-center flex-row" v-for="article in articles" :key="article._id">
              <h4 class="articles-list-row--title mb-0 d-block" v-html="article.title.en" />
              <div class="articles-list-row--actions d-flex align-items-center">
                <el-button type="primary" class="mr-4" @click="editArticle(article.id)">Edit</el-button>
                <el-button type="danger" @click="deleteArticle(article)">Delete</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "articles",
  computed: {
    ...mapGetters({
      articles: 'blog/articles',
    })
  },
  mounted() {
    if (!this.$cookies.get('admin')) {
      this.$router.push(this.localePath('/'));
    }
  },
  methods: {
    ...mapActions({
      deleteArticle: 'blog/DELETE_ARTICLE'
    }),
    addArticle() {
      this.$router.push(this.localePath('/admin/articles/add'));
    },
    editArticle(id) {
      this.$router.push(this.localePath(`/admin/articles/${id}`));
    },
  },
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
    }
  }
  &-title {
    text-align: center;
  }
}
</style>
