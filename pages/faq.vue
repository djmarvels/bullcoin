<template>
  <div class="terms">
    <transition name="fade">
      <div v-if="terms" class="container">
        <nuxt-link :to="localePath('/')" class="terms-prev">
          <articlePrev /> <span v-html="$t('Page.Prev')" />
        </nuxt-link>
        <div class="terms-title" v-html="$t('FAQ.Title')" />
        <div class="terms-content" v-html="$t('FAQ.Content')" />
      </div>
    </transition>
  </div>
</template>

<script>
import articlePrev from '~/assets/icons/article-prev.svg?inline';
export default {
    name       : 'FAQ',
    components : {
        articlePrev
    },
    data : () => ({
        terms : false
    }),
    mounted() {
        this.$nextTick(() => {
            this.terms = true;
        });
    }
};
</script>

<style scoped lang="scss">
  .terms {
    position: relative;
    z-index: 2;
    margin-top: 67px;
    margin-bottom: 40px;
    &-title {
      font-weight: bold;
      font-size: 130px;
      line-height: 163px;
      margin-top: 20px;
      color: #FFFFFF;
      margin-bottom: 10px;
      @media (max-width: 1199px) {
        font-size: 110px;
        line-height: 120%;
      }
      @media (max-width: 991px) {
        font-size: 80px;
      }
      @media (max-width: 767px) {
        font-size: 60px;
      }
      @media (max-width: 575px) {
        font-size: 35px;
      }
    }
    &-content {
      font-weight: 300;
      font-size: 15px;
      line-height: 141.7%;
      color: #FFFFFF;
      span.white {
        font-weight: 500;
      }
      @media (max-width: 575px) {
        font-size: 13px;
      }
    }
    &-prev {
      display: flex;
      align-items: center;
      font-weight: normal;
      color: #ffffff;
      font-size: 15px;
      line-height: 105.7%;
      svg {
        margin-right: 7px;
        display: block;
        width: 9px;
        height: 14px;
        g, path {
          fill: #ffffff;
        }
      }
      span {
        @media (max-width: 575px) {
          white-space: nowrap;
        }
      }
    }
  }
</style>
