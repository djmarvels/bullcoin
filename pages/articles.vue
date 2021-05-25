<template>
  <div class="articles">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <div class="articles-head">
            <div class="articles-title" v-html="$t('Articles.Title')" />
          </div>
        </div>
      </div>
      <div class="row articles-body">
        <div v-for="i in 8" :key="i" class="col col-12 col-lg-6">
          <div class="article">
            <img class="article-image" :src="require('~/assets/images/article-image.png').default">
            <div class="article-overlay" />
            <div class="article-content">
              <div class="article-title" v-html="'Основной заголовок статьи <br>'+ 'в две строки'" />
              <div class="article-text" v-html="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl hendrerit facilisis purus velit, non.'" />
            </div>
          </div>
        </div>
      </div>
      <div class="row articles-nav">
        <div class="col col-12">
          <div class="articles-nav--row">
            <button class="articles-nav--button articles-nav--prev">
              <articlesPrev />
            </button>
            <button class="articles-nav--button articles-nav--number">
              <span>1</span>
            </button>
            <button class="articles-nav--button articles-nav--number">
              <span>2</span>
            </button>
            <button class="articles-nav--button articles-nav--number">
              <span>3</span>
            </button>
            <button class="articles-nav--button articles-nav--dots">
              <span>...</span>
            </button>
            <button class="articles-nav--button articles-nav--next">
              <articlesNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesPrev from '~/assets/icons/articles-chevron-left.svg?inline';
import articlesNext from '~/assets/icons/articles-chevron-next.svg?inline';
export default {
    name       : 'Articles',
    components : {
        articlesPrev,
        articlesNext
    }
};
</script>

<style scoped lang="scss">
.articles {
  &-nav {
    margin-top: 27px;
    &--row {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    &--button {
      padding: 0;
      margin: 0;
      border: 0;
      background-color: #141212;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &:not(&:last-child) {
        margin-right: 18px;
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
        border-radius: 50%;
        opacity: 0;
        transition: all .3s 0s linear;
      }
      span {
        position: relative;
        z-index: 2;
      }
    }
    &--number, &--dots {
      color: #656565;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      transition: all .3s 0s linear;
      &:hover {
        color: #ffffff;
        &::before {
          opacity: 1;
        }
      }
    }
    &--dots {
      background: transparent;
      color: #555555;
      line-height: 4px;
    }
    &--prev, &--next {
      svg {
        width: 8px;
        position: relative;
        z-index: 2;
        g, path {
          transition: all .3s 0s linear;
        }
      }
      &:hover {
        svg {
          g, path {
            fill: #ffffff;
          }
        }
        &::before {
          opacity: 1;
        }
      }
    }
  }
  &-head {
    position: relative;
    z-index: 2;
    margin-top: 30px;
  }
  &-body {
    margin-top: 46px;
  }
  &-title {
    font-weight: bold;
    font-size: 130px;
    line-height: 163px;
    color: #ffffff;
    text-align: center;
    @media (max-width: 575px) {
      font-size: 60px;
      line-height: 120%;
    }
  }
}
.article {
  position: relative;
  z-index: 2;
  background: #141212;
  border-radius: 10px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    min-height: 275px;
    max-height: 275px;
    overflow: hidden;
  }
  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(20, 18, 18, 0) -13.97%, #141212 63.56%);
    border-radius: 10px;
    z-index: 1;
  }
  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    @media (max-width: 575px) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &-content {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: auto;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 30px 11px;
    @media (max-width: 991px) {
      padding-bottom: 30px;
      padding-top: 30px;
    }
    @media (max-width: 575px) {
      position: relative;
    }
  }
  &-title {
    font-weight: bold;
    font-size: 20px;
    line-height: 105.7%;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
  }
  &-text {
    font-weight: normal;
    font-size: 14px;
    line-height: 105.7%;
    color: #6B6B6B;
    text-align: center;
    width: 100%;
    margin-top: 18px;
  }
}
</style>
