<template>
  <div id="blogCarousel" class="owl-carousel owl-theme index-blog-carousel">
    <div v-for="article in articles" :key="article.id" class="item" @click="goToArticle(article.id)">
      <div class="index-blog-carousel--item">
        <div class="index-blog-carousel--title" v-html="article.title.en" />
        <div class="index-blog-carousel--text" v-html="article.description.en" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "the-articles",
  data: () => ({
    blogCarousel : null
  }),
  computed: {
    ...mapGetters({
      articles: 'blog/articles',
    }),
  },
  mounted() {
    this.$nextTick(() => {
      require('owl.carousel');
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        this.blogCarousel = jQuery('#blogCarousel').owlCarousel({
          margin    : 10,
          loop      : false,
          autoWidth : true,
          items     : 4,
          nav       : false,
          dots      : false
        });
      }, 0);
    })
  },
  methods: {
    goToArticle(id) {
      this.$router.push(this.localePath(`/articles/${id}`));
    },
  }
}
</script>

<style scoped>

</style>
